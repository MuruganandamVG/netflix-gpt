import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const GetMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const RespData = await response.json();

    const FilterData = RespData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = FilterData.length ? FilterData[0] : RespData.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    GetMovieVideos();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
