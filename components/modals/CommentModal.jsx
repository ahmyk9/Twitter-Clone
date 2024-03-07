import {closeCommentUpModal} from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import {
  ChartBarIcon,
  PhotoIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { db } from "@/firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const CommentModal = () => {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  const tweetDetails = useSelector(state=>state.modals.commentTweetDetails)
  const userImg = useSelector(state=>state.user.photoURL)
  const user = useSelector(state => state.user)

  const [comment, setComment] = useState("")
  const router = useRouter()

  async function sendComment(){
    const docRef = doc(db, "posts", tweetDetails.id)
    const commentDetails = {
      username: user.username,
      name: user.name,
      photoURL: user.photoURL,
      comment: comment
    }
    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails)
    })
    dispatch(closeCommentUpModal())
    router.push("/" + tweetDetails.id)
  }

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentUpModal())}>
        <div
          className="w-full h-full 
          relative
          sm:w-[600px] sm:h-[386px]
        rounded-lg bg-black border border-gray-500 text-white
        sm:p-10
        ">
          <div className="absolute w-[2px] h-[77px] bg-gray-500 left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]"></div>
          <div
            onClick={() => dispatch(closeCommentUpModal())}
            className="absolute top-4 cursor-pointer ">
            <XMarkIcon className="w-6 "></XMarkIcon>
          </div>

          <div className="mt-8 flex space-x-3 w-full">
            <div>
              <img
                className="w-12 h-12 rounded-full object-cover "
                src={tweetDetails.photoURL}
                alt=""
              />
            </div>

            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">{tweetDetails.name}</h1>
                <h1 className="text-gray-500">@{tweetDetails.username}</h1>
              </div>
              <p className="mt-1">{tweetDetails.tweet}</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@username</span>
              </h1>
            </div>
          </div>

          <div className="mt-11">
            <div className="flex space-x-3">
              <div>
                <img
                  className="w-12 h-12 rounded-full object-cover "
                  src={userImg}
                  alt=""
                />
              </div>

              <div className="w-full ">
                <textarea
                onChange={event=>setComment(event.target.value)}
                  placeholder="Tweet your reply!"
                  className="w-full bg-transparent resize-none text-lg outline-none "></textarea>

                <div className="pt-4 flex justify-between border-t border-gray-700">
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
                    className="bg-[#1d9bf0] rounded-full px-4 py-1.5 h-[40px] w-[80px]
                  disabled:bg-opacity-50
                  "
                  disabled={!comment}
                  onClick={sendComment}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentModal;
