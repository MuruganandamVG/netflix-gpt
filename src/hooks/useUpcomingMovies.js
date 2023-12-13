import React from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((state) => state.movies.UpcomingMovies);
  const GetUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const RespData = await response.json();

    dispatch(addUpcomingMovies(RespData.results));
  };

  useEffect(() => {
    !UpcomingMovies && GetUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
