import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const GetNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const RespData = await response.json();
    dispatch(addnowPlayingMovies(RespData.results));
  };

  useEffect(() => {
    GetNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
