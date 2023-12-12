import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import MoviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
