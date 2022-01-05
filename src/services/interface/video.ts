export interface metaType {
  total: number;
  count: number;
  limit: string;
  current_page: number;
  total_pages: number;
}

export interface MoviesRequestType {
  page?: number;
  limit?: number;
}

export interface MoviesType {
  id?: number;
  title: string;
  description: string;
  duration: string;
  poster: string;
  trailer: string;
}

export interface MovieReducerType {
  movieDetails: MoviesType | null,
  moviesList: Array<MoviesType> | null,
  meta: metaType | null,
  currentPage: number;
}