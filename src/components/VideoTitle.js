import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[30%] ">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-8 text-xl rounded-lg hover:bg-opacity-80">
          <div className="flex justify-center items-center  ">
            <div>
              <TbPlayerPlayFilled size={20} />
            </div>

            <span className="p-0">Play</span>
          </div>
        </button>
        <button className="bg-gray-500 text-white p-3 px-8 text-xl mx-2  rounded-lg hover:bg-opacity-90">
          <div className="flex justify-center items-center  ">
            <div>
              <FiInfo size={20} />
            </div>

            <span className="p-0">More info</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
