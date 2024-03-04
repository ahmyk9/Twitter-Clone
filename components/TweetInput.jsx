import {ChartBarIcon, PhotoIcon, FaceSmileIcon, CalendarIcon, MapPinIcon} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const TweetInput = () => {

  const [text, setText] = useState("")

  async function sendTweet(){
    
  }

  return (
    <div className=" flex space-x-3 p-3 border-b border-gray-700 ">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/dp.jpg"
        alt=""
      />
      <div className="w-full ">
        <textarea
          placeholder="Tweet!"
          className="bg-transparent resize-none outline-none
          w-full min-h-[50px] text-lg"
          onChange={event => setText(event.target.value)}
          ></textarea>
      {/* Icons Divs*/}

      <div className="flex border-t  border-gray-700 pt-4 justify-between">
        <div className="flex space-x-0">
          <div className="iconsAnimation">
            <PhotoIcon className="h-[22px] text-[#1d9bf0] "></PhotoIcon>
          </div>
          <div className="iconsAnimation">
            <ChartBarIcon className="h-[22px] text-[#1d9bf0] "></ChartBarIcon>
          </div>
          <div className="iconsAnimation">
            <FaceSmileIcon className="h-[22px] text-[#1d9bf0] "></FaceSmileIcon>
          </div>
          <div className="iconsAnimation">
            <CalendarIcon className="h-[22px] text-[#1d9bf0] "></CalendarIcon>
          </div>
          <div className="iconsAnimation">
            <MapPinIcon className="h-[22px] text-[#1d9bf0] "></MapPinIcon>
          </div>
   
        </div>
        <button className="bg-[#1d9bf0] rounded-full px-4 py-1.5 h-[40px] w-[80px]">Tweet</button>
      </div>
      </div>
    </div>
  );
};

export default TweetInput;
