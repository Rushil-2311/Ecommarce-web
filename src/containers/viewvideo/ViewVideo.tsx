import React, { FunctionComponent, useEffect } from "react";
import VideoPlayer from 'components/viewVideo/VideoPlayer';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestGetMovie,
  requestDeleteMovie
} from "appRedux/actions/video";
import { getmovieDetails } from "appRedux/selectors/video";
import { MoviesType } from "services/interface/video";

type ViewVideoPropTypes = {};

const ViewVideo: FunctionComponent<ViewVideoPropTypes> = () => {
  const history = useHistory();
  const params: any = useParams();
  const dispatch = useDispatch();
  const movieDetails: MoviesType = useSelector(getmovieDetails);

  useEffect(() => {
    if (params.id) {
      dispatch(requestGetMovie(params.id))
    }
  }, [dispatch, params]);

  const deleteMovieHandler = () => {
    dispatch(requestDeleteMovie(params.id))
  }

  return (
    <div className="movies-container">
      <div className="mt20">
        <div className="back-arrow" onClick={() => history.push("/dashboard")}>
          <span className="material-icons">arrow_back</span>
        </div>
      </div>
      {
        movieDetails ?
        <div className="movie-view-container secondary pa15 mt20 br10 light--text">
          <div className="text-center an-20 bold-text">
            { movieDetails.title }
          </div>
          <div className="text-center py20">
            <VideoPlayer
              className="video-player"
              url={movieDetails.trailer}
              poster={movieDetails.poster}
            />
          </div>
          <div className="an-14 regular-text accent--text">
            {movieDetails.description}
          </div>
          <div className="movie-action-btns flex-x flex-end pt15">
            <button
              className="an-15 medium-text success light--text"
              onClick={() => history.push(`/edit/${movieDetails.id}`)}
            >
              Edit
            </button>
            <button
              className="an-15 medium-text warning light--text"
              onClick={deleteMovieHandler}
            >
              Delete
            </button>
          </div>
        </div> :
        <div className="an-30 medium-text light--text text-center fill-width pt60">No Details Available</div>
      }
    </div>
  );
};

export default ViewVideo;
