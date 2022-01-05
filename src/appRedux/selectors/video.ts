import { RootState } from "../store";

export const getMoviesData = (state: RootState) => state.movies.moviesList;
export const getMovieMeta = (state: RootState) => state.movies.meta;
export const getmovieDetails = (state: RootState) => state.movies.movieDetails;
