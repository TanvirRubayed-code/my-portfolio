'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {assets} from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true);
      }else {
        setIsScroll(false);
      }
    })
  },[])
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)"; // Changed to match horizontal movement
    }
  };

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full ' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? "bg-opacity-50 backdrop-blur-lg shadow-sm": ""}`}>
      <a href="#top">
        <Image src={assets.logo} alt='logo' className='w-64 cursor-pointer mr-14'/>
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg: gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
        <li><a className={'font-[family-name:var(--font-roboto-mono)]'} href="#top">Home</a></li>
        <li><a className={'font-[family-name:var(--font-inter)]'} href="#about">About</a></li>
        <li><a className='font-inter' href="#services">Services</a></li>
        <li><a className="" href="#work">My Work</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <div className='flex items-center gap-4'>
        <button>
          <Image src={assets.moon_icon} alt='' className='w-6'/>
        </button>
        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' href="#contact">Contact <Image src={assets.arrow_icon} alt='arrow icon' className='w-3'></Image></a>

        <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
          <Image src={assets.menu_black} alt='' className='w-6'/>
        </button>
      </div>
      {/* ------------------mobile menu----------------  */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
        </div>
        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar