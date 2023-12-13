import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const MovieTrailer = useSelector((state) => state.movies.trailerVideos);
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
    !MovieTrailer && GetMovieVideos();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
