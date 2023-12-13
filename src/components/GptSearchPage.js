import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchPage = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langkey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const HandleGptSearchClick = async () => {
    console.log("Gpt Search called");
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ".only give me 5 movies with comma separated like the example given ahead..Example:Leo,Jailer,Chitha,Dada,GoodNight";
    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(GptResults.choices?.[0]?.message?.content);

    const GptMovies = GptResults.choices?.[0]?.message?.content.split(",");

    const PromiseArray = GptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(PromiseArray);
    dispatch(
      addGptMovieResult({ movieNames: GptMovies, movieResults: tmdbResults })
    );
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="m-4 col-span-3 p-2 bg-red-700 text-white rounded-lg"
          onClick={HandleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
