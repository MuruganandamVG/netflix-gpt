import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    PopularMovies: null,
    trailerVideos: null,
    UpcomingMovies: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
  },
});

export const {
  addnowPlayingMovies,
  addTrailerVideos,
  addPopularMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
