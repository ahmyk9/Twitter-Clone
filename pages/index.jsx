import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import SideBar from "@/components/SideBar";
import PostFeed from "@/components/PostFeed";
import Trending from "@/components/Trending";
import Banner from "@/components/Banner";


export default function Home() {
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#e7e9ea]
      <Banner></Banner>
      max-w-[1440px] mx-auto flex">
        <SideBar></SideBar>
        <PostFeed></PostFeed>
        <Trending></Trending>
        {/* <Modal></Modal> */}
      </div>
      <Banner></Banner>
    </div>
  );
}
