import React from "react";
import ReactDOM from "react-dom";
import ApplicationPage from "./pages/application";
import { Provider } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";

// import "@fontsource/roboto";

import "./styles/styles.scss";

import store from "./store.jsx";
import reportWebVitals from "./reportWebVitals";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={promise}>
      <ApplicationPage />
    </Elements>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
