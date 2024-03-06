import { openCommentUpModal } from "@/redux/modalSlice";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import Moment from "react-moment";
import { useDispatch } from "react-redux";



const Tweet = ({data}) => {
  const dispatch = useDispatch()



  return (
    <div className="border-b  border-gray-700   ">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        photoURL={data?.photoURL}
        text={data?.tweet}></TweetHeader>
      <div className=" flex p-3 ml-16 space-x-14  text-gray-500">
        <div 
        onClick={()=>dispatch(openCommentUpModal())}
        className="tweetAnimation w-7 h-7">
          <ChatBubbleOvalLeftEllipsisIcon className=" h[20px] w-[20px] "></ChatBubbleOvalLeftEllipsisIcon>
        </div>
        <div className="tweetAnimation w-7 h-7">
          <HeartIcon className=" h-5 w-5 "></HeartIcon>
        </div>
        <div className="tweetAnimation w-7 h-7">
          <ChartBarIcon className=" h-5 w-5"></ChartBarIcon>
        </div>
        <div className="tweetAnimation w-7 h-7">
          <ArrowUpTrayIcon className=" h-5 w-5"></ArrowUpTrayIcon>
        </div>
      </div>
    </div>
  );
};

export function TweetHeader({username, name, timestamp, text, photoURL}) {
  return (
    <div className=" flex space-x-3 p-3 border-gray-700 ">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={photoURL}
        alt=""
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"> </div>
          <Moment fromNow>
            <span>{timestamp}</span>
          </Moment>
        </div>
        <span> {text}</span>
      </div>
    </div>
  );
}

export default Tweet;
