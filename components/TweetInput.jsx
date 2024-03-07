import { db } from "@/firebase/firebase";
import { openLogInUpModal } from "@/redux/modalSlice";
import {ChartBarIcon, PhotoIcon, FaceSmileIcon, CalendarIcon, MapPinIcon} from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TweetInput = () => {

  const [text, setText] = useState("")
  const user = useSelector(state=> state.user)
  const dispatch = useDispatch()

// TODO: learn the todo app with nextJS and then continue this

  async function sendTweet(){

    if (!user.username){
      dispatch(openLogInUpModal())
      return
    }

    const docRef =  await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name, 
      photoURL: user.photoURL,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text
    })
    setText("")
  }

  return (
    <div className=" flex space-x-3 p-3 border-b border-gray-700 ">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={user.photoURL || "/assets/twitter-logo.png"}
        alt=""
      />
      <div className="w-full ">
        <textarea
          placeholder="Tweet!"
          className="bg-transparent resize-none outline-none
          w-full min-h-[50px] text-lg"
          onChange={event => setText(event.target.value)}
          value={text}
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
        <button
          onClick={sendTweet}
          disabled={!text}
         className="bg-[#1d9bf0] rounded-full px-4 py-1.5 h-[40px] w-[80px]
         disabled:bg-opacity-50
         ">
          Tweet
          </button>
      </div>
      </div>
    </div>
  );
};

export default TweetInput;
