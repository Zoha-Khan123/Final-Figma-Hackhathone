import React from 'react'
import { shoppexData } from "../Data-File/shoppex-data/data";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from 'next/image';

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

const Shopex = () => {
  return (
 <>
 
 <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mx-auto">
  {shoppexData.map((data, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center w-full max-w-[400px] min-h-[250px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto"
    >
      <Image
        src={data.imageUrl}
        alt="Image"
        width={80}
        height={80}
        className="mb-4"
      />
      <h1
        className={`${josefin.className} text-[#151875] text-lg font-semibold mb-2`}
      >
        {data.heading}
      </h1>
      <p
        className={`${lato.className} text-[#1A0B5B4D] text-center text-sm`}
      >
        {data.paragraph}
      </p>
    </div>
  ))}
</div>

 </>
  )
}

export default Shopex




















{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
         {shoppexData.map((data, index) => { */}
//            return (
//              <div
//                key={index}
//                className="bg-white w-full h-[350px] p-4 flex flex-col justify-center items-center space-y-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg hover:scale-105 hover:bg-[#f1f1f1]"
//              >
//                {/* Image Section with hover effect */}
//                <div className="flex justify-center items-center w-20 h-20 mb-4 overflow-hidden hover:scale-110 transition-all duration-300">
//                  <Image
//                    src={data.imageUrl}
//                    alt="Image"
//                    width={80}
//                    height={80}
//                    className="rounded-full object-cover"
//                  />
//                </div>
//                {/* Heading */}
//                <h1 className="text-[#151875] text-lg font-semibold text-center">
//                  {data.heading}
//                </h1>
//                {/* Paragraph */}
//                <p className="text-[#8A8FB9] text-sm text-center mt-2">
//                  {data.paragraph}
//                </p>
//              </div>
//            );
//          })}
//        </div>