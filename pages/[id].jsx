import PostFeed from "@/components/PostFeed";
import SideBar from "@/components/SideBar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import {db} from "@/firebase/firebase";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {doc, getDoc} from "firebase/firestore";
import React from "react";
import Moment from "react-moment";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useSelect} from "@mui/base";
import {useSelector} from "react-redux";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  const formattedData = {
    username: data.username,
    name: data.name,
    photoURL: data.photoURL,
    text: data.tweet,
    comments: data.comments || null,
    timestamp: JSON.stringify(data.timestamp.toDate()),
  };

  return {
    props: {
      tweetData: formattedData,
    },
  };
}

const CommentsPage = ({tweetData}) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div
        className="bg-black min-h-screen text-[#e7e9ea]
      max-w-[1440px] mx-auto flex">
        <SideBar></SideBar>

        <div
          className="sm:ml-16 xl:ml-[350px] max-w-2xl flex-grow
          border-gray-700 border-x">
          <div
            className="bg-black px-3 py-2 text-lg 
          flex space-x-2
          sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7"></ArrowLeftIcon>
            </Link>

            <h1>Tweet</h1>
          </div>

          <div className="border-b  border-gray-700   ">
            <div className=" flex space-x-3 p-3 border-gray-700 ">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={tweetData.photoURL}
                alt=""
              />
              <div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <h1 className="text-white font-bold">{tweetData.name}</h1>
                  <span>@{tweetData.username}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"> </div>
                  <Moment fromNow>
                    <span>{JSON.parse(tweetData.timestamp)}</span>
                  </Moment>
                </div>
                <span className="text-xl"> {tweetData.text}</span>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between border-b items-center border-gray-700 p-2">
            <div className="flex justify-center items-center p-1 space-x-2">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={user.photoURL}
                alt=""
              />
              <h1 className="text-md p-2 text-gray-500">Reply...</h1>
            </div>
            <button
              disabled={true}
              className="bg-[#1d9bf0] rounded-full px-4 py-1.5 h-[40px] w-[80px]
         disabled:bg-opacity-50
         ">
              Tweet
            </button>
          </div> */}

          {tweetData.comments?.map((comment) => (
            <div className="border-b  border-gray-700   ">
              <div className=" flex space-x-3 p-3 border-gray-700 ">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src={comment.photoURL}
                  alt=""
                />
                <div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <h1 className="text-white font-bold">{comment.name}</h1>
                    <span>@{comment.username}</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"> </div>
                    <Moment fromNow></Moment>
                  </div>
                  <span className=""> {comment.comment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Trending></Trending>
      </div>
    </>
  );
};

export default CommentsPage;
