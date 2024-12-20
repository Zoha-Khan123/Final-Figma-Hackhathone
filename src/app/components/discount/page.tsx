import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

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

const DiscountItem = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 gap-4">
        <h1
          className={`text-[#151875] ${josefin.className} text-3xl font-extrabold`}
        >
          Discount Item
        </h1>
        <div>
          <div
            className={`text-[#151875] ${lato.className} flex flex-row gap-4 text-lg font-semibold `}
          >
            <Link href="" className="text-[#FB4997] inline-block">
              <span className="relative flex items-center justify-center">
                <span className="relative">Wood Chair</span>
                <span className="absolute bottom-0 left-0 right-0 mx-auto block h-[2px] bg-[#FB4997] w-full"></span>
              </span>
            </Link>

            <Link href="">Plastic Chair</Link>
            <Link href="">Sofa Chair</Link>
          </div>
        </div>
        {/* bottom part */}
        <div className="max-w-[1000px] px-6 py-6 gap-5 flex flex-col md:flex-row justify-center items-center">
          <div className="space-y-2 lg:space-y-4">
            <h1
              className={`${josefin.className} text-[#151875] text-2xl font-bold`}
            >
              20% Discount Of All Products
            </h1>
            <p className={`${lato.className} text-[#FB2E86] font-bold`}>
              Eams Sofa Compact
            </p>
            <p className={`${lato.className} text-[#B7BACB]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div
              className={`flex flex-col lg:flex-row gap-2 lg:gap-4 text-[#B7BACB] ${lato.className}`}
            >
              <p className="flex lg:justify-center items-center gap-2">
                <FaCheck />
                Material expose like metals
              </p>
              <p className="flex lg:justify-center items-center gap-2">
                <FaCheck />
                Clear lines and geomatric figures
              </p>
            </div>
            <div
              className={`flex flex-col lg:flex-row gap-2 lg:gap-12 text-[#B7BACB] ${lato.className}`}
            >
              <p className="flex lg:justify-center items-center gap-2">
                <FaCheck />
                Simple neutral colours.
              </p>
              <p className="flex lg:justify-center items-center gap-2">
                <FaCheck />
                Material expose like metals
              </p>
            </div>
            <div>
              <button
                className={`bg-[#FB2E86] text-white mt-4 py-3 px-8 text-sm font-semibold hover:bg-[#f51e74] hover:scale-105 transition-all duration-300 ${josefin.className}`}
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative  min-w-[350px] min-h-[350px] bg-[#f9e8ef] rounded-full overflow-hidden">
            <Image
              src={"/Discount.png"}
              width={600}
              height={600}
              alt="Image"
              className="object-cover absolute inset-0 w-[450px] h-[350px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountItem;
