import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import Auth from "./Auth";
import movieReducer from "./video";
import { loadingBarReducer } from "react-redux-loading-bar";

const createRootReducer = (history: History<any>) =>
  combineReducers({
    auth: Auth,
    movies: movieReducer,
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
  });

export default createRootReducer;
