import React, { FunctionComponent, useEffect, useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import MovieBanner from "components/dashboard/MovieBanner";
import { getMoviesData } from "appRedux/selectors/video";
import { getLoaderStatus } from "appRedux/selectors/LoadingBar";
import { requestGetMoviesList } from "../../appRedux/actions/video";
import {
  MoviesType
} from "services/interface/video";

type DashboardPropTypes = {};

const Dashboard: FunctionComponent<DashboardPropTypes> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(getMoviesData);
  const loading = useSelector(getLoaderStatus);

  useEffect(() => {
    dispatch(requestGetMoviesList({page: 1, limit: 20}));
  }, [dispatch])

  const handleScroll = useCallback(() => {
    const element: any = document.querySelector("#scroll-element")
    if (element.scrollHeight - Number(element.scrollTop.toFixed(0)) === element.clientHeight) {
      // console.log("Implement pagination")
    }
  }, []);

  useEffect(() => {
    const element: any = document.querySelector("#scroll-element")
    if (element) {
      element.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => element && element.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className="movies-container py20 flex-x flex-wrap">
        {
          movies?.length ?
          movies.map((movie: MoviesType, i) => {
            return (
              <MovieBanner key={i} movie={movie}/>
            )
          }) :
          !loading && <div className="an-30 medium-text light--text text-center fill-width pt60">
            No Movie found
          </div>
        }
      <div className="add-button" onClick={() => history.push("/add")}>+</div>
      </div>
    </>
  );
};

export default Dashboard;
