import { all, fork, put, takeEvery, select } from "redux-saga/effects";
import { toast } from "react-toastify";
import { push } from "react-router-redux";
import {
  REQUEST_GET_MOVIES_LIST,
  REQUEST_ADD_MOVIE,
  REQUEST_MOVIE,
  REQUEST_EDIT_MOVIE,
  REQUEST_DELETE_MOVIE
} from "constants/ActionTypes";
import {
  successGetMoviesList,
  successAddMovie,
  successGetMovie
} from "appRedux/actions/video";
import { getToken } from "appRedux/selectors/Auth";
import VideoService from "services/video.service";
import {
  MoviesType,
  MoviesRequestType,
} from "services/interface/video";
import { showLoading, hideLoading } from "react-redux-loading-bar";

interface ResponseGenerator {
  data?: any;
  status?: number;
}

function* requestMoviesListHandler({
  payload,
}: {
  payload: MoviesRequestType;
  type: string;
}) {
  try {
    yield put(showLoading());
    const token: string = yield select(getToken);
    if (token) {
      const videoApi = new VideoService(token);
      const response: ResponseGenerator = yield videoApi.getMoviesList(
        payload
      );
      if (response && response.status === 200) {
        const data: Array<MoviesType> = response.data;
        yield put(hideLoading());
        yield put(successGetMoviesList(data));
      } else {
        toast.error(response.data);
        yield put(hideLoading());
      }
    }
  } catch (error: any) {
    toast.error(error?.response?.data);
    yield put(hideLoading());
  }
}

function* requestMovieHandler({
  payload,
}: {
  payload: number;
  type: string;
}) {
  try {
    yield put(showLoading());
    const token: string = yield select(getToken);
    if (token) {
      const videoApi = new VideoService(token);
      const response: ResponseGenerator = yield videoApi.getMovie(
        payload
      );
      if (response && response.status === 200) {
        const data: Array<MoviesType> = response.data;
        yield put(hideLoading());
        yield put(successGetMovie(data));
      } else {
        toast.error(response.data);
        yield put(hideLoading());
      }
    }
  } catch (error: any) {
    toast.error(error?.response?.data);
    yield put(hideLoading());
  }
}

function* requestAddMovieListHandler({
  payload,
}: {
  payload: MoviesType;
  type: string;
}) {
  try {
    yield put(showLoading());
    const token: string = yield select(getToken);
    if (token) {
      const videoApi = new VideoService(token);
      const response: ResponseGenerator = yield videoApi.addMovie(
        payload
      );
      if (response && response.status === 201) {
        yield put(push("/dashboard"));
        yield put(hideLoading());
        yield put(successAddMovie());
      } else {
        toast.error(response.data);
        yield put(hideLoading());
      }
    }
  } catch (error: any) {
    toast.error(error?.response?.data);
    yield put(hideLoading());
  }
}

function* requestEditMovieHandler({
  payload,
}: {
  payload: {
    id: number;
    data: MoviesType
  };
  type: string;
}) {
  try {
    yield put(showLoading());
    const token: string = yield select(getToken);
    if (token) {
      const videoApi = new VideoService(token);
      const response: ResponseGenerator = yield videoApi.editMovie(
        payload.id,
        payload.data
      );
      if (response && response.status === 200) {
        yield put(push(`/view/${payload.id}`));
        yield put(hideLoading());
      } else {
        toast.error(response.data);
        yield put(hideLoading());
      }
    }
  } catch (error: any) {
    toast.error(error?.response?.data);
    yield put(hideLoading());
  }
}

function* requestDeleteMovieHandler({
  payload,
}: {
  payload: number;
  type: string;
}) {
  try {
    yield put(showLoading());
    const token: string = yield select(getToken);
    if (token) {
      const videoApi = new VideoService(token);
      const response: ResponseGenerator = yield videoApi.deleteMovie(
        payload
      );
      if (response && response.status === 204) {
        yield put(push(`/dashboard`));
        yield put(hideLoading());
      } else {
        toast.error(response.data);
        yield put(hideLoading());
      }
    }
  } catch (error: any) {
    toast.error(error?.response?.data);
    yield put(hideLoading());
  }
}

export function* requestMoviesList() {
  yield takeEvery(REQUEST_GET_MOVIES_LIST, requestMoviesListHandler);
}

export function* requestAddMovieList() {
  yield takeEvery(REQUEST_ADD_MOVIE, requestAddMovieListHandler);
}

export function* requestMovie() {
  yield takeEvery(REQUEST_MOVIE, requestMovieHandler);
}

export function* requestEditMovie() {
  yield takeEvery(REQUEST_EDIT_MOVIE, requestEditMovieHandler);
}

export function* requestDeleteMovie() {
  yield takeEvery(REQUEST_DELETE_MOVIE, requestDeleteMovieHandler);
}

export default function* rootSaga() {
  yield all([
    fork(requestMoviesList),
    fork(requestAddMovieList),
    fork(requestMovie),
    fork(requestEditMovie),
    fork(requestDeleteMovie)
  ]);
}
