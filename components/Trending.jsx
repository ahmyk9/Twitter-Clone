import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {CheckBadgeIcon} from "@heroicons/react/24/solid";
import React from "react";

const Trending = () => {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <MagnifyingGlassIcon className="w-6 text-gray-600"></MagnifyingGlassIcon>
        <input
          className="bg-transparent
        focus:outline-none
        placeholder:text-gray-600
        "
          type=""
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's Happening</h1>
        <div className="relative p-3 hover:bg-[#1d1f23] cursor-pointer">
          <EllipsisHorizontalIcon className="absolute right-4  w-5 text-gray-600 "></EllipsisHorizontalIcon>
          <p className="text-gray-500 text-xs">Trending in Australia</p>
          <h1 className="font-bold text-[15px]">Ahmed looking for a job!</h1>
          <p className="text-gray-500 text-xs ">500k Tweets</p>
        </div>
        <div className="relative p-3 hover:bg-[#1d1f23] cursor-pointer">
          <EllipsisHorizontalIcon className="absolute right-4  w-5 text-gray-600 "></EllipsisHorizontalIcon>
          <p className="text-gray-500 text-xs">Trending in Australia</p>
          <h1 className="font-bold text-[15px]">Ahmed Sad right now!</h1>
          <p className="text-gray-500 text-xs ">500k Tweets</p>
        </div>
        <div className="relative p-3 hover:bg-[#1d1f23] cursor-pointer">
          <EllipsisHorizontalIcon className="absolute right-4  w-5 text-gray-600 "></EllipsisHorizontalIcon>
          <p className="text-gray-500 text-xs">Trending in Australia</p>
          <h1 className="font-bold text-[15px]">Hire Ahmed, he is begging!</h1>
          <p className="text-gray-500 text-xs ">500k Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to Follow</h1>

        <div className="relative justify-between p-3">
          <div className="flex relative space-x-3">
            <div className="">
              <img
                className="rounded-full h-11 w-11 object-cover"
                src="/assets/dp.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-[15px]">Ahmed Khilji</h1>
                <CheckBadgeIcon className="w-[18px] text-blue-400"></CheckBadgeIcon>
              </div>
              <p className="text-xs text-gray-500">@ahmy</p>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white absolute right-2 bg-white rounded-3xl text-black text-sm font-bold h-8 w-20">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="relative justify-between p-3">
          <div className="flex relative space-x-3">
            <div className="">
              <img
                className="rounded-full h-11 w-11 object-cover"
                src="/assets/dp.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-[15px]">Ahmed Khilji</h1>
                <CheckBadgeIcon className="w-[18px] text-blue-400"></CheckBadgeIcon>
              </div>
              <p className="text-xs text-gray-500">@ahmy</p>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white absolute right-2 bg-white rounded-3xl text-black text-sm font-bold h-8 w-20">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="relative justify-between p-3">
          <div className="flex relative space-x-3">
            <div className="">
              <img
                className="rounded-full h-11 w-11 object-cover"
                src="/assets/dp.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-[15px]">Ahmed Khilji</h1>
                <CheckBadgeIcon className="w-[18px] text-blue-400"></CheckBadgeIcon>
              </div>
              <p className="text-xs text-gray-500">@ahmy</p>
            </div>
            <div>
              <button className="hover:bg-blue-500 hover:text-white absolute right-2 bg-white rounded-3xl text-black text-sm font-bold h-8 w-20">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
