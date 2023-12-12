import React from "react";
import GptSearchPage from "./GptSearchPage";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { Background_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={Background_URL} />
      </div>
      <GptSearchPage />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
