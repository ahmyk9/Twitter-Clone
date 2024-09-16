import {db} from "@/firebase/firebase";
import {
  openCommentUpModal,
  openLogInUpModal,
  setCommentTweet,
} from "@/redux/modalSlice";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import {HeartIcon as FilledH} from "@heroicons/react/24/solid";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Moment from "react-moment";
import {useDispatch, useSelector} from "react-redux";

const Tweet = ({data, id}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const [likes, setLikes] = useState();
  const [comments, setComments] = useState();

  async function likeComment(event) {
    event.stopPropagation();
    if (!user.username) {
      dispatch(openLogInUpModal());
      return;
    }

    if (likes.includes(user.uid)) {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayUnion(user.uid),
      });
    }
  }

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "posts", id), (doc) => {
      setLikes(doc.data()?.likes);
      setComments(doc.data()?.comments);
    });
    return unsubscribe;
  }, []);

async function deleteTweet(event){
  event.stopPropagation()
  await deleteDoc(doc(db, "posts", id))
}

  return (
    <div
      onClick={() => router.push("/" + id)}
      className="border-b  border-gray-700 cursor-pointer">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        photoURL={data?.photoURL}
        text={data?.tweet}></TweetHeader>
      <div className=" flex p-3 ml-16 space-x-14  text-gray-500">
        <div
          onClick={(event) => {
            event.stopPropagation();
            if (!user.username) {
              dispatch(openLogInUpModal());
              return;
            }
            dispatch(
              setCommentTweet({
                id: id,
                tweet: data.tweet,
                photoURL: data.photoURL,
                name: data.name,
                username: data.username,
              })
            );
            dispatch(openCommentUpModal());
          }}
          className="commentAnimation w-7 h-7 flex justify-center items-center">
          <ChatBubbleOvalLeftEllipsisIcon className=" h[20px] w-[20px] "></ChatBubbleOvalLeftEllipsisIcon>
          {comments?.length > 0 && <span>{comments.length}</span>}
        </div>
        <div
          onClick={likeComment}
          className="heartAnimation w-7 h-7 flex justify-center items-center ">
          {likes?.includes(user.uid) ? (
            <FilledH className=" text-red-500 h-5 w-5 "></FilledH>
          ) : (
            <HeartIcon className=" h-5 w-5 "></HeartIcon>
          )}

          {likes?.length > 0 && <span>{likes.length}</span>}
        </div>
        {user.uid === data?.uid && (<div 
        onClick={deleteTweet}
        className="cursor-pointer hover:text-red-600">
          <TrashIcon className="w-5"></TrashIcon>
        </div>)}
        <div className="otherIconsAnimation w-7 h-7 ">
          <ChartBarIcon className=" h-5 w-5"></ChartBarIcon>
        </div>
        <div className="otherIconsAnimation w-7 h-7">
          <ArrowUpTrayIcon className=" h-5 w-5"></ArrowUpTrayIcon>
        </div>
      </div>
    </div>
  );
};

export function TweetHeader({ username, name, timestamp, text, photoURL }) {
  return (
    <div className="flex space-x-3 p-3 border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={photoURL}
        alt=""
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          {timestamp ? (
            <Moment fromNow>{timestamp}</Moment>
          ) : (
            <span>Loading...</span> // Fallback if timestamp is missing
          )}
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}



export default Tweet;
