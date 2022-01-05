import React, { FunctionComponent } from "react";
import {
    MoviesType
} from "services/interface/video";
import { useHistory } from "react-router-dom";

type MovieBannerPropTypes = {
    movie: MoviesType
};

const MovieBanner: FunctionComponent<MovieBannerPropTypes> = ({ movie }) => {
    const history = useHistory();
    return (
        <div className="movie-banner-container pa5 br10 ma10 cursor-pointer" onClick={() => history.push(`/view/${movie.id}`)}>
            <div className="movie-banner">
                <img className="fill-width" src={movie.poster} alt="movie-banner"/>
            </div>
            <div className="movie-name an-17 medium-text py10 text-center">
                {movie.title}
            </div>
            <div className="movie-details an-15 regular-text flex-x space-between accent--text">
                <div className="movie-type">
                    Movie
                </div>
                <div className="movie-date">
                    {movie.duration}
                </div>
            </div>
        </div>
    );
};

export default MovieBanner;
