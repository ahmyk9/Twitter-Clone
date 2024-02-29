import Image from "next/image";
import React from "react";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";

const PostFeed = () => {
  return (
    <div
      className="sm:ml-16 xl:ml-[350px] max-w-2xl flex-grow
    border-gray-700 border-x">
      <div className="bg-black px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
        Home
      </div>
      <TweetInput></TweetInput>
      <Tweet></Tweet>
    </div>
  );
};

export default PostFeed;
