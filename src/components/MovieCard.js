import React from "react";
import { Image_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={Image_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
