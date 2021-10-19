import axios from "axios";

import AuthService from "./auth.service";
import { UNKNOWN_ERROR } from "../constants/errors.jsx";
import { refreshToken } from "../actions/users";

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

const apiUrl = process.env.REACT_APP_API_URL;
const OAUTH_URL = `${apiUrl}/oauth/token`;


export default function () {
  axios.interceptors.request.use(function (config) {
    if (AuthService.isAuthenticated()) {
      if (config.url.startsWith(apiUrl) && !config.url.startsWith(OAUTH_URL)) {
        config.headers.Authorization = "Bearer " + AuthService.getAccessToken();
      }
    }
    return config;
  });

  //Intercept response and prepare the error object
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const {
        config,
        response: { status }
      } = error;
      const originalRequest = config;

      if (status === 401) {
        if (
          config.url.endsWith("oauth/token") ||
          config.url.endsWith("users/logout")
        ) {

          

          if (error.error) {
            return Promise.reject(error);
          } else {
            return Promise.reject({
              code: 401,
              message:
                "unauthorized user to login, please reach our support team [support@gapfyl.com]"
            });
          }
        }

        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true;
          var refreshTokenValue = AuthService.getRefreshToken();

          refreshToken(refreshTokenValue)
            .then((token) => {
              isAlreadyFetchingAccessToken = false;

              if (token && token.data && token.data.access_token) {
                AuthService.saveToken(
                  token.data.access_token,
                  token.data.refresh_token
                );
                onAccessTokenFetched(token.data.access_token);
              }
            })
            .catch((err) => {
              isAlreadyFetchingAccessToken = false;
              subscribers = [];

              return Promise.reject("Auth error");
            });
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((access_token) => {
            originalRequest.headers.Authorization = "Bearer " + access_token;
            resolve(axios(originalRequest));
          });
        });

        return retryOriginalRequest;
      }

      console.log("Unknown error :" + error);

      let errorMessage = "";

      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      } else {
        return Promise.reject({
          code: UNKNOWN_ERROR,
          message: "Oops, Unable to complete the request"
        });
      }
    }
  );
}

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter((callback) => callback(access_token));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}
