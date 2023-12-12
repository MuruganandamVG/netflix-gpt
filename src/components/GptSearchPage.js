import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchPage = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-3 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="m-4 col-span-3 p-2 bg-red-700 text-white rounded-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;