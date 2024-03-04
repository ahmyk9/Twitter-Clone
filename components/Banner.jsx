import React from "react";
import SignUpModal from "./modals/SignUpModal";
import LoginUpModal from "./modals/LoginModal";

const Banner = () => {
  return (
    <div className=" flex items-center xl:space-x-[200px] w-full h-[100px] justify-center bg-[#1d9bf0] bottom-0">
      <div className="flex  justify-evenly  p-3">
        <div className="hidden xl:inline mr-10 ">
          <h1 className="text-white font-bold text-2xl">
            Don't miss what's happening
          </h1>
          <span className="text-white text-[18px]">People on Twitter are first to know!</span>
        </div>
        <div className="flex space-x-3">
          <LoginUpModal></LoginUpModal>
          <SignUpModal></SignUpModal>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
