import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  EllipsisHorizontalCircleIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24 ">
      <nav className="h-full relative xl:space-y-1.5">
        <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
          <Image
            src={"/assets/twitter-logo.png"}
            width={34}
            height={34}></Image>
        </div>
        <SideBarLink Icon={HomeIcon} text={"Home"}></SideBarLink>
        <SideBarLink Icon={HashtagIcon} text={"Explore"}></SideBarLink>
        <SideBarLink Icon={BellIcon} text={"Notifications"}></SideBarLink>
        <SideBarLink Icon={InboxIcon} text={"Messages"}></SideBarLink>
        <SideBarLink Icon={BookmarkIcon} text={"Bookmarks"}></SideBarLink>
        <SideBarLink Icon={UserIcon} text={"Profile"}></SideBarLink>
        <SideBarLink
          Icon={EllipsisHorizontalCircleIcon}
          text={"More"}></SideBarLink>
        <div className="
        bottom-0
        hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
        absolute xl:p-3 flex justify-center items-center space-x-3"> 
          <img className="w-10 h-10 rounded-full object-cover" src="/assets/pfp.png" alt="" />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">name</h1>
            <h1 className="text-gray-500 ">@username</h1>
          </div>
          <EllipsisHorizontalIcon className="h-5 hidden xl:inline" ></EllipsisHorizontalIcon>
        </div>
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-10">
          Tweet
        </button>
      </nav>
    </div>
  );
};

function SideBarLink({text, Icon}) {
  return (
    <li className="hoverAnimation justify-center xl:justify-start flex mb-3 items-center text-xl px-1 space-x-3">
      <Icon className="h-7"></Icon>
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}

export default SideBar;
