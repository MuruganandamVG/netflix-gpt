import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((state) => state.movies?.trailerVideos);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen top-0  aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
