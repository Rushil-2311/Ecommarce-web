import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "../sagas/index";
// import logger from "redux-logger";
import createReducer from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancer =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const persistedReducer = persistReducer(persistConfig, createReducer(history));

const store = createStore(
  persistedReducer,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      ...middlewares
    )
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export { store, persistor };
