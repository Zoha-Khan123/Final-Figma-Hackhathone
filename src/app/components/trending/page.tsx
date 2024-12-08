import React from 'react';
import Image from 'next/image';
import { Josefin_Sans, Lato } from 'next/font/google';

// Use Lato font
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Trending = () => {
  return (
    <div className='bg-[#F1F0FF] flex flex-col-reverse p-4 justify-center items-center md:flex-row'>
      <div>
        <Image 
          src="/Trending.png" 
          alt="Trending Image" 
          width={400} 
          height={400} 
          layout="intrinsic" 
        />
      </div>
      <div className="bg-[#F1F0FF] flex flex-col p-4 justify-center items-center md:flex-row">
      <div className="space-y-2 md:w-[430px]">
        <div>
          <h1 className={`${josefin.className} text-2xl font-extrabold text-[#151875]`}>
            Unique Features Of latest & Trending Products
          </h1>
        </div>

        <ul className={`${lato.className} text-[#ACABC3] font-bold space-y-2 list-disc pl-6`}>
          <li className="marker:text-[#FB2E86]">All frames constructed with hardwood solids and laminates</li>
          <li className="marker:text-[#32A852]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</li>
          <li className="marker:text-[#0077FF]">Arms, backs and seats are structurally reinforced</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Trending;