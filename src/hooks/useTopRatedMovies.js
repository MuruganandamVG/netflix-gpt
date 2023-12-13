import React from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((state) => state.movies.TopRatedMovies);
  const GetTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const RespData = await response.json();

    dispatch(addTopRatedMovies(RespData.results));
  };

  useEffect(() => {
    !TopRatedMovies && GetTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
