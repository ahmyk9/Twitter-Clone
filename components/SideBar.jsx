import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  EllipsisHorizontalCircleIcon,
  BookmarkIcon,
  UserIcon,
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
        <div className="absolute bottom-0"> </div>
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
