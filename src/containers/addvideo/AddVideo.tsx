import React, { FunctionComponent } from "react";
import AddVideoForm from "components/addVideo/addVideoForm";

type AddVideoPropTypes = {};

const AddVideo: FunctionComponent<AddVideoPropTypes> = (props) => {
  return (
    <>
      <div className="movies-container py20">
        <AddVideoForm />
      </div>
    </>
  );
};

export default AddVideo;
