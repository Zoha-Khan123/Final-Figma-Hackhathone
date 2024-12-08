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
const HomePage = () => {
  return (
    <>
    <div className="flex flex-col justify-center space-y-5 space-x-5 md:space-y-0  md:flex-row bg-[#F2F0FF] h-screen md:h-[calc(100vh-108px)] overflow-hidden">

    <div className="flex justify-center">
      <div>
      <Image src="/shell (2).png" alt="shell" width={200}  height={200} className="h-[100px] w-[100px] md:h-[300px] md:w-[300px]" />
      </div>

      <div className='flex flex-col justify-center sm:space-y-3  mt-6'>

        <div>
        <p className={`text-[#FB2E86] text-lg font-semibold ${lato.className}`}>Best Furniture For Your Castle....</p>
        </div>

          <div>
         <h1 className={`text-2xl space-y-0 font-extrabold text-[#0D0E43]  ${josefin.className} md:space-y-2 xl:text-[40px]`}>
          <div>New Furniture Collection</div><div>Trends in 2020</div>
          </h1>
          </div>

          <div>
          <p className={`text-[#8A8FB9] text-sm lg:text-base max-w-[400px] ${lato.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          </div>

          <div>
          <button className={`bg-[#FB2E86] text-white mt-4 py-2 px-6 text-sm font-semibold hover:bg-[#f51e74] hover:scale-105 transition-all duration-300 ${josefin.className}`}>
         Shop Now
         </button>

          </div>

      </div>

    </div>


    <div className='flex justify-center items-center'>
    <Image src="/sofa.png" alt="sofa" width={400} height={400} className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"/>
    </div>

    </div>
    
    
    </>
  )
}

export default HomePage