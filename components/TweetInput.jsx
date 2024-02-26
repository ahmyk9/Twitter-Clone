import React from "react";

const TweetInput = () => {
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700 ">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/dp.jpg"
        alt=""
      />
      <div>
        <textarea
          placeholder="Tweet!"
          className="bg-transparent resize-none outline-none
            w-full min-h-[50px] text-lg"></textarea>
      </div>
      {/* Icons Divs*/}

      <div className="flex justify-between border-t border-gray-700">
        <div>0 0 0</div>
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default TweetInput;
