import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import SideBar from "@/components/SideBar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import Banner from "@/components/Banner";
import { useSelector } from "react-redux";
import CommentModal from "@/components/modals/CommentModal";

export default function Home() {
  const username = useSelector(state => state.user.username)
  console.log(username)
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#e7e9ea]
      max-w-[1440px] mx-auto flex">
        <SideBar></SideBar>
        <PostFeed></PostFeed>
        <Trending></Trending>
      </div>
      <CommentModal></CommentModal>
      {!username && <Banner></Banner>}
    </div>
  );
}
