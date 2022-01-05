import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import video from "./video";

export default function* rootSaga() {
  yield all([
    authSagas(),
    video(),
  ]);
}
