import React, { FunctionComponent } from "react";

type VideoPlayerPropTypes = {
  url: string;
  poster: string;
  className?: string;
};

const VideoPlayer: FunctionComponent<VideoPlayerPropTypes> = ({ url, poster, ...props }) => {
  return (
    <video {...props} poster={poster} width="320" height="240" controls>
        <source src={url} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
