import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

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

const Footer = () => {
  return (
    <>
      <div className="bg-[#EEEFFB]">
        <div className="py-14 px-10 sm:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:justify-items-center ">
          {/* Column 1: Hekto and Email Subscription */}
          <div className="space-y-4">
            <h1 className={`${josefin.className} text-[30px] font-extrabold`}>
              Hekto
            </h1>
            <div
              className={`${josefin.className} text-[#EEEFFB] text-[14px] flex items-center w-full`}
            >
              <div className="flex w-[250px] h-[34px] bg-white">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 rounded-l-md border-none outline-none"
                />
                <button className="bg-[#FB2E86] px-3 py-1 text-xs hover:cursor-pointer">
                  Sign Up
                </button>
              </div>
            </div>

            <div className={`${josefin.className} text-[#8A8FB9] text-[14px]`}>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="space-y-4">
            <h1 className={`${josefin.className} text-[22px] font-semibold`}>
              Categories
            </h1>
            <div
              className={`${lato.className} text-[#8A8FB9] text-[14px] space-y-3`}
            >
              <p>Laptops & Computers</p>
              <p>Cameras & Photography</p>
              <p>Smart Phones & Tablets</p>
              <p>Video Games & Consoles</p>
              <p>Waterproof Headphones</p>
            </div>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-4">
            <h1 className={`${josefin.className} text-[22px] font-semibold`}>
              Customer Care
            </h1>
            <div
              className={`${lato.className} text-[#8A8FB9] text-[14px] space-y-3`}
            >
              <p>My Account</p>
              <p>Discount</p>
              <p>Returns</p>
              <p>Orders History</p>
              <p>Order Tracking</p>
            </div>
          </div>

          {/* Column 4: Pages */}
          <div className="space-y-4">
            <h1 className={`${josefin.className} text-[22px] font-semibold`}>
              Pages
            </h1>
            <div
              className={`${lato.className} text-[#8A8FB9] text-[14px] space-y-3`}
            >
              <p>Blog</p>
              <p>Browse the Shop</p>
              <p>Category</p>
              <p>Visual Composer Elements</p>
              <p>WooCommerce Pages</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#E7E4F8] py-2 px-4 lg:px-24">
          <p className={`${lato.className} text-[#8A8FB9]`}>
            ©Webecy - All Rights Reserved
          </p>

          <div className="flex space-x-4">
            {/* Facebook Link */}
            <Link href="https://www.facebook.com" target="_blank">
              <div className="border-2 bg-[#151875] rounded-full p-2 flex items-center justify-center hover:bg-[#252bef] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
                <FiFacebook className="text-white text-xl hover:text-white" />
              </div>
            </Link>

            {/* Instagram Link */}
            <Link href="https://www.instagram.com" target="_blank">
              <div className="border-2 bg-[#151875] rounded-full p-2 flex items-center justify-center hover:bg-[#252bef] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
                <FaInstagram className="text-white text-xl hover:text-white" />
              </div>
            </Link>

            {/* Twitter Link */}
            <Link href="https://www.twitter.com" target="_blank">
              <div className="border-2 bg-[#151875] rounded-full p-2 flex items-center justify-center hover:bg-[#252bef] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer">
                <CiTwitter className="text-white text-xl hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
