import {
  REQUEST_GET_MOVIES_LIST,
  SUCCESS_GET_MOVIES_LIST,
  REQUEST_ADD_MOVIE,
  SUCCESS_ADD_MOVIE,
  REQUEST_MOVIE,
  SUCCESS_MOVIE,
  REQUEST_EDIT_MOVIE,
  REQUEST_DELETE_MOVIE,
} from "constants/ActionTypes";
import {
  MoviesType, MoviesRequestType,
} from "services/interface/video";

export const requestGetMoviesList = (data: MoviesRequestType) => {
  return {
    type: REQUEST_GET_MOVIES_LIST,
    payload: data,
  };
};

export const successGetMoviesList = (data: Array<MoviesType>) => {
  return {
    type: SUCCESS_GET_MOVIES_LIST,
    payload: data
  };
};

export const requestAddMovie = (data: any) => {
  return {
    type: REQUEST_ADD_MOVIE,
    payload: data,
  };
};

export const successAddMovie = () => {
  return {
    type: SUCCESS_ADD_MOVIE,
  };
};

export const requestGetMovie= (id: number) => {
  return {
    type: REQUEST_MOVIE,
    payload: id,
  };
};

export const successGetMovie= (data: Array<MoviesType> | null) => {
  return {
    type: SUCCESS_MOVIE,
    payload: data
  };
};

export const requestEditMovie = (id, data: any) => {
  return {
    type: REQUEST_EDIT_MOVIE,
    payload: {id, data},
  };
};

export const requestDeleteMovie = (data: any) => {
  return {
    type: REQUEST_DELETE_MOVIE,
    payload: data,
  };
};
