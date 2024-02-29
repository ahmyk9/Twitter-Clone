import React from "react";
import SignUpModal from "./modals/SignUpModal";

const Banner = () => {
  return (
    <div className=" flex items-center xl:space-x-[200px] w-full h-[100px] justify-center bg-[#1d9bf0] bottom-0">
      <div className="flex  justify-evenly  p-3">
        <div className="hidden xl:inline mr-10 ">
          <h1 className="text-white font-bold text-2xl">
            Dont miss what's happening
          </h1>
          <span className="text-white text-[18px]">People on Twitter are first to know!</span>
        </div>
        <div className="flex">
          <button className="hover:bg-black  hover:text-white m-1 text-white  bg-transparent border border-white rounded-3xl text-black text-sm font-bold h-[40px] w-[160px]">
            Log In
          </button>
          <SignUpModal></SignUpModal>
        </div>
      </div>
    </div>
  );
};

export default Banner;
