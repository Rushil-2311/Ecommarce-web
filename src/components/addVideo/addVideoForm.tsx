import React, { FunctionComponent, useEffect, useState } from "react";
import { Formik } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  requestAddMovie,
  requestEditMovie,
  requestGetMovie,
  successGetMovie
} from "../../appRedux/actions/video";
import { getLoaderStatus } from "../../appRedux/selectors/LoadingBar";
import { MoviesType } from "services/interface/video";
import { getmovieDetails } from "appRedux/selectors/video";
import VideoPlayer from 'components/viewVideo/VideoPlayer';

type AddVideoFormPropTypes = {};

const AddVideoForm: FunctionComponent<AddVideoFormPropTypes> = () => {
  const [editedPoster, setEditedPoster]= useState<null | string>(null);
  const [editedTrailer, setEditedTrailer]= useState<null | string>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const params: any = useParams();
  const loading = useSelector(getLoaderStatus);
  const movieDetails: MoviesType = useSelector(getmovieDetails);

  useEffect(() => {
    if (params.id) {
      dispatch(requestGetMovie(params.id))
    } else {
      dispatch(successGetMovie(null))
    }
  }, [dispatch, params]);

  useEffect(() => {
    if(movieDetails) {
      setEditedPoster(movieDetails.poster)
      setEditedTrailer(movieDetails.trailer)
    } else {
      setEditedPoster(null)
      setEditedTrailer(null)
    }
  }, [movieDetails])

  const validate = Yup.object({
    poster: Yup.string().required("Please select poster"),
    title: Yup.string().required("Please enter title"),
    description: Yup.string().required("Please enter description"),
    duration: Yup.string().required("Please enter duration"),
    trailer: Yup.string().required("Please select trailer"),
  });

  const addMovieHandler = (values) => {
    let formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('duration', values.duration);
    if(!editedPoster) {
      formData.append('poster', values.poster);
    }
    if(!editedTrailer) {
      formData.append('trailer', values.trailer);
    }
    if(params.id) {
      dispatch(requestEditMovie(params.id, formData))
    } else {
      dispatch(requestAddMovie(formData))
    }
  }

  return (
    <div className="form-container pa5 br10 ma10">
      <div>
        <div className="back-arrow" onClick={() => history.push("/dashboard")}>
          <span className="material-icons">arrow_back</span>
        </div>
        <h1 className="text-center an-20 bold-text accent--text mb35"
        >
          {params.id ? 'EDIT MOVIE' : 'ADD MOVIE'}
        </h1>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          poster: editedPoster ? 'test.jpg' : "",
          title: movieDetails && params.id ? movieDetails.title : "",
          description: movieDetails && params.id ? movieDetails.description : "",
          duration: movieDetails && params.id ? movieDetails.duration : "",
          trailer: editedTrailer ? 'abc.jp' : "",
        }}
        onSubmit={addMovieHandler}
        validationSchema={validate}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="add-form">
            {
              editedPoster ?
              <div className="form-poster pb20 flex-x align-center">
                <img className="br10" src={editedPoster} alt="poster" />
                <button className="remove-action text-center ml20 warning light--text px15 py10 br10" onClick={() => setEditedPoster(null)}>
                  Remove
                </button>
              </div> :
              <TextField
                label="Poster"
                name="poster"
                type="file"
                accept="image/*"
                {...props}
                value={undefined}
                onChange={(event: any) =>{
                  const file = event.target.files[0];
                  props.setFieldValue('poster', file)
                }}
              />
            }
            <TextField label="Title" name="title" type="text" />
            <TextField label="Description" name="description" type="text" />
            <TextField label="Duration" name="duration" type="text" />
            {
              editedTrailer ?
              <div className="form-poster pb20 flex-x align-center">
                <VideoPlayer
                  url={editedTrailer}
                  poster={movieDetails?.poster}
                />
                <button className="remove-action text-center ml20 warning light--text px15 py10 br10" onClick={() => setEditedTrailer(null)}>
                  Remove
                </button>
              </div> :
              <TextField
                label="Trailer"
                type="file"
                name="trailer"
                accept="video/*"
                value={undefined}
                onChange={(event: any) =>{
                  const file = event.target.files[0];
                  props.setFieldValue('trailer', file)
                }}
              />
            }
            <button type="submit" disabled={loading !== 0}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddVideoForm;
