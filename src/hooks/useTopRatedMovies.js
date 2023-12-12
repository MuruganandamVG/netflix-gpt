import React from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const GetTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const RespData = await response.json();

    dispatch(addTopRatedMovies(RespData.results));
  };

  useEffect(() => {
    GetTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
