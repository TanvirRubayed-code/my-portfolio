import { assets } from '@/assets/assets';
import Image from 'next/image'
import React from 'react'



  export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];
const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-5xl'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user image' className='w-full rounded-3xl'></Image>
            </div>
            <div className='flex-1 '>
                <p className='mb-10 max-w-2xl'>I am a self-motivated full-stack web developer with a strong foundation in both <span className='font-bold'>Front-end</span> and <span className='font-bold'>Back-end</span> technologies. I have practical experience building dynamic applications like a <a href="https://github.com/TanvirRubayed-code/weather_detection" target='_blank' className='font-bold'>Weather Prediction App</a> or a <a href="https://github.com/TanvirRubayed-code/examBillManagement" target='_blank' className='font-bold'>Exam Remuneration System</a> for teachers. I also explore <span className='font-bold'>Competitive Programming</span> as a hobby.</p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    <li className='shadow rounded-xl p-6 curson-pointer hover:-translate-y-1 hover:shadow-lg duration-500'>
                        <Image src={assets.code_icon} alt='' className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold'>Languages</h3>
                        <p className='text-gray-600 text-sm'>HTML, CSS, JavaScript React Js, Next Js, Node Js, SQL...</p>
                    </li>
                    <li className='shadow rounded-xl p-6 curson-pointer hover:-translate-y-1 hover:shadow-lg duration-500'>
                        <Image src={assets.edu_icon} alt='' className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold'>Education</h3>
                        <p className='text-gray-600 text-sm'>BSc. in Computer Science and Engineering</p>
                    </li>
                    <li className='shadow rounded-xl p-6 curson-pointer hover:-translate-y-1 hover:shadow-lg duration-500'>
                        <Image src={assets.project_icon} alt='' className='w-7 mt-3'></Image>
                        <h3 className='my-4 font-semibold'>Projects</h3>
                        <p className='text-gray-600 text-sm'>Built more than 5 projects</p>
                    </li>
                </ul>
                <h4 className='my-6 text-gray-700'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={assets.vscode} alt='vs code' className='w-5 sm:w-7'></Image>
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={assets.firebase} alt='vs code' className='w-5 sm:w-7'></Image>
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={assets.mongodb} alt='vs code' className='w-5 sm:w-7'></Image>
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={assets.figma} alt='vs code' className='w-5 sm:w-7'></Image>
                    </li>
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={assets.git} alt='vs code' className='w-5 sm:w-7'></Image>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About