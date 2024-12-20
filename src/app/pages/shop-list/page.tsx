import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import { shopItem } from "../shop";

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

const Shop = () => {
  // Array of custom colors
  const colorArray = ["#DE9034", "#E60584", "#5E37FF"];
  return (
    <>
      {/* Upper Part */}
      <div className="w-full  h-60 ">
        <div className="max-w-[1210px] px-2 h-full flex items-center m-auto">
          <div>
            <h1
              className={`textColor block text-[36px] font-bold ${josefin.className}`}
            >
              Shop List
            </h1>
            <ul
              className={`flex gap-2 text-[16px] ${lato.className} font-extrabold`}
            >
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <li>.</li>
              <li>Pages</li>
              <li className="h-4 text-[#FB2E86]">.</li>
              <Link href={"/pages/shop"}>
                <li className="text-[#FB2E86]">Shop List</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Part */}
      <div className="max-w-[1210px] px-2 h-full sm:mx-auto my-20 mx-2">
        {/* 1st */}
        <div className=" w-full flex flex-col space-y-10 justify-between">
          {shopItem.map((items) => {
            return (
              <div key={items.id} className="flex flex-col md:flex-row">
                {/* Left side */}
                <div className="">
                  <Image
                    src={items.imageUrl}
                    alt="Image"
                    width={400}
                    height={400}
                    className="max-w-full h-auto"
                  />
                </div>

                {/* Right side */}
                <div className="max-w-[800px] space-y-4 flex flex-col justify-center md:space-x-5">
                  <div className="flex items-center gap-6 md:ml-5 mt-3 md:mt-0">
                    <h1
                      className={`${josefin.className} text-[#111C85] text-2xl font-bold`}
                    >
                      {items.heading}
                    </h1>

                    {/* bullets */}
                    <div className="flex space-x-1">
                      {Array.from({ length: items.bullets }).map((_, index) => {
                        const bulletColor =
                          colorArray[index % colorArray.length]; // Loop through colors
                        return (
                          <div
                            key={index}
                            className="flex justify-center items-center"
                          >
                            <div
                              className="w-4 h-4 rounded-full mr-2"
                              style={{ backgroundColor: bulletColor }} // Apply dynamic background color
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* prices */}
                  <div className="flex gap-4">
                    <p
                      className={`${josefin.className} text-[#111C85] text-xl `}
                    >
                      {items.currencySymbol}
                      {items.price}
                    </p>
                    <p
                      className={`${josefin.className} text-[#111C85] text-xl`}
                    >
                      {items.currencySymbol}
                      {items.discountPrice}
                    </p>
                    {/* stars */}
                    <div className="flex justify-center items-center gap-2">
                      {items.stars.map((StarIcon, index) => {
                        return (
                          <div key={index}>
                            <StarIcon className="text-yellow-500 w-4 h-4" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* paragraph */}
                  <p
                    className={`${lato.className} text-[#9295AA] text-xl leading-normal`}
                  >
                    {items.paragraph}
                  </p>

                  {/* Icons */}
                  <div className="flex space-x-6 pt-5">
                    {items.icons.map((IconComponent, index) => {
                      return (
                        <div key={index}>
                          <IconComponent className="text-[#535399] w-5 h-5" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
