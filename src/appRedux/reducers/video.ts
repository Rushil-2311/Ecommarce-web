import {
  SUCCESS_GET_MOVIES_LIST,
  SUCCESS_MOVIE
} from "constants/ActionTypes";
import { MovieReducerType } from "services/interface/video";

const INIT_STATE: MovieReducerType = {
  movieDetails: null,
  moviesList: [],
  currentPage: 1,
  meta: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INIT_STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SUCCESS_GET_MOVIES_LIST: {
      return {
        ...state,
        moviesList: action.payload.result,
        meta: action.payload.total,
      };
    }
    case SUCCESS_MOVIE: {
      return {
        ...state,
        movieDetails: action.payload
      };
    }
    default:
      return state;
  }
};
