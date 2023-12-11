import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const GetPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const RespData = await response.json();

    dispatch(addPopularMovies(RespData.results));
  };

  useEffect(() => {
    GetPopularMovies();
  }, []);
};

export default usePopularMovies;
