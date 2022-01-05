import { all, fork, put, takeEvery } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  SIGNIN_USER,
  SIGNOUT_USER,
} from "constants/ActionTypes";
import {
  userSignInSuccess,
  userSignOutSuccess,
} from "appRedux/actions/Auth";

function* userSignIn({ payload }: any) {
  try {
    yield put(userSignInSuccess({
      token: 'Test Token'
    }));
    yield put(push("/dashboard"));
  } catch (error: any) {}
}

function* signOut() {
  try {
    yield put(userSignOutSuccess());
    yield put(push("/login"));
  } catch (error: any) {
  }
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}
export function* signInUser() {
  yield takeEvery(SIGNIN_USER, userSignIn);
}

export default function* rootSaga() {
  yield all([
    fork(signInUser),
    fork(signOutUser),
  ]);
}
