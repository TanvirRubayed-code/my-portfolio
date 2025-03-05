import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile image' className='rounded-full w-32'></Image>
      </div>
      <h3 className='flex items-end gap-2 text-xl md: text-2xl mb-3'>Hi! I &apos; m Tanvir Rubayed Tauhid <Image src={assets.hand_icon} alt='' className='w-6'></Image>
      </h3>
      <h1 className='text-3xl sm: text-6xl lg: text-[66px]'>Full Stack Web Developer.</h1>
      <p className="max-w-2xl mx-auto">
        I am a full-stack web developer from Bangladesh with more than 2+ years of experience.
      </p>
      <div className='flex flex-col sm: flex-row item-center gap-4 mt-4'>
      <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='contact me' className='w-4'></Image></a>
      <a href="/cv-tanvir-rubayed.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='download resume' className='w-4'></Image></a>
      </div>
    </div>
  )
}

export default Header