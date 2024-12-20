import Link from 'next/link'
import React from 'react'
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image"
import Shopex from '@/app/components/shoppex/shopex';

// Use Lato font
const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const josefin = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <>
     {/* Header Section */}
     <div className="w-full bg-[#F6F5FF] h-60">
     <div className="max-w-[1210px] px-4 h-full flex items-center mx-auto">
       <div>
         <h1
           className={`text-[#151875] text-[28px] md:text-[36px] font-bold ${josefin.className}`}
         >
           About Us
         </h1>
         <ul
           className={`flex flex-wrap gap-2 text-[14px] md:text-[16px] ${lato.className} font-extrabold`}
         >
           <Link href={"/"}>
             <li>Home</li>
           </Link>
           <li>.</li>
           <li>Pages</li>
           <li className="h-4 text-[#FB2E86]">.</li>
           <Link href={"/pages/blog"}>
             <li className="text-[#FB2E86]">About Us</li>
           </Link>
         </ul>
       </div>
     </div>
   </div>



   <div className="max-w-[1000px] px-4 mx-auto flex flex-col justify-center items-center space-y-20 mb-20 bg-green-600">

    {/* Top Part */}
    <div className='flex flex-col lg:flex-row bg-red-500'>
  {/* Image Section */}
  <div className="flex justify-center items-center lg:w-1/2">
    <Image
      src="/aboutUs/about-01.png"
      alt="Image"
      width={400}
      height={400}
      className="w-full max-w-[400px] h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
    <h1 className={`text-2xl lg:text-4xl font-bold mb-4 ${josefin.className} text-[#151875] `}>
      Know About Our Ecommerce Business, History
    </h1>
    <p className="text-[#8A8FB9]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet
      erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis
      bibendum quam.
    </p>
    <div>
          <button className={`bg-[#FB2E86] text-white mt-4 py-2 px-6 text-sm font-semibold hover:bg-[#f51e74] hover:scale-105 transition-all duration-300 ${josefin.className}`}>
         Shop Now
         </button>

          </div>
  </div>
  </div>


  {/* Features */}
  <div>

  <h1 className={`${josefin.className} text-3xl font-bold`}>Our Features</h1>
  <Shopex/>
  </div>
</div>







   </>
  )
}

export default About