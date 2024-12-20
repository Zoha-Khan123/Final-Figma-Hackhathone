import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const NewsLetter = () => {
  return (
    <div>
      <div className="bg-[url('/News.png')] bg-cover bg-center h-80 relative flex justify-center items-center">
        <div className="absolute max-w-[500px] text-center mx-auto px-2">
          <h1
            className={`text-[#151875] leading-normal text-3xl font-extrabold ${josefin.className}`}
          >
            Get Latest Update By Subscribe Our Newsletter
          </h1>
          <div>
            <button
              className={`bg-[#FB2E86] text-white mt-4 py-3 px-10 text-sm font-semibold hover:bg-[#f51e74] hover:scale-105 transition-all duration-300 ${josefin.className}`}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] flex justify-center items-center mx-auto my-14">
        <Image src="/Logos.png" alt="Image" width={600} height={600}></Image>
      </div>
    </div>
  );
};

export default NewsLetter;
