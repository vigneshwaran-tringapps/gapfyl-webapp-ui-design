import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory'
import axiosMiddleware from "redux-axios-middleware";

import rootReducer from './reducers/index';
import rootSaga from './sagas/index.jsx';
import AuthInterceptor from './services/auth.interceptor'

const history = createBrowserHistory();
const interceptor = new AuthInterceptor(history);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, axiosMiddleware(interceptor)];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store;