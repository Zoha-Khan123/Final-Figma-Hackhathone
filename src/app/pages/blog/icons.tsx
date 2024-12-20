import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Josefin_Sans } from 'next/font/google';


const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


const Icons = () => {
  return (
    <div  className='space-y-5'>
    
    <div className="flex space-x-4">
      <div className="flex items-center justify-center w-10 h-10 bg-[#5625DF] text-white rounded-full hover:bg-[#5c2be4] hover:scale-110 transition-all duration-300 cursor-pointer">
        <FaFacebookF />
      </div>
      <div className="flex items-center justify-center w-10 h-10 bg-[#FF27B7] text-white rounded-full hover:bg-[#FF27B7] hover:scale-110 transition-all duration-300 cursor-pointer">
        <FaInstagram />
      </div>
      <div className="flex items-center justify-center w-10 h-10 bg-[#37DAF3] text-white rounded-full hover:bg-[#37DAF3] hover:scale-110 transition-all duration-300 cursor-pointer">
        <FaTwitter />
      </div>
    </div>
    
    </div>
  )
}

export default Icons