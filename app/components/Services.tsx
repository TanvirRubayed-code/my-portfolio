import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>What i offers</h4>
        <h2 className='text-center text-5xl'>My services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I am a Full-Stack Developer with extensive experience in building projects independently.</p>

        <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2 lg:grid-cols-4">
            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={assets.web_icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>Web design</h3>
                <p className="text-sm text-gray-600 leading-5">I can design a website from Figma, Xd, Sketch or any other desing file...</p>
                <a href="#" className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image></a>
            </div>

            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={assets.web_icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>Web development</h3>
                <p className="text-sm text-gray-600 leading-5">I can develop both frontend and backend for a website...</p>
                <a href="#" className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image></a>
            </div>
    

            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={assets.mobile_icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>Mobile app</h3>
                <p className="text-sm text-gray-600 leading-5">I can develop android mobile application using Java programming...</p>
                <a href="#" className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image></a>
            </div>

            <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-500'>
                <Image src={assets.web_icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>Machine learning</h3>
                <p className="text-sm text-gray-600 leading-5">I can build a machine learning model from given data...</p>
                <a href="#" className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image></a>
            </div>

        </div>
    </div>
  )
}

export default Services