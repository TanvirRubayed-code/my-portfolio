import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6'/> 
                <a target='_blank' href="mailto:tanvirrubayedtauhid@gmail.com">tanvirrubayedtauhid@gmail.com</a>
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; 2025 Tanvir Rubayed Tauhid. All right reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/TanvirRubayed-code">Github</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/tanvir-rubayed-tauhid-849abb202/">LinkdIn</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.facebook.com/tanvir.rubayed.5/">Facebook</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer