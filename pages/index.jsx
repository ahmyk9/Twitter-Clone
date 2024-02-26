import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SideBar from '@/components/SideBar'
import PostFeed from '@/components/PostFeed'
import Trending from '@/components/Trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-[#e7e9ea]
    max-w-[1440px] mx-auto flex'>
      <SideBar></SideBar>
      <PostFeed></PostFeed>
      <Trending></Trending>
    </div>
  )
}
