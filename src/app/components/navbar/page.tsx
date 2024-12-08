"use client";

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonAddOutline, IoSearch } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchBarVisible(false); // Hide search bar when menu opens
  };

  return (
    <div>
      {/* Navbar-01 */}
      <div className="bg-[#7E33E0] text-[#F1F1F1] text-sm md:text-base p-2">
        <div className="w-full max-w-[1200px] flex justify-between items-center m-auto flex-col md:flex-row md:pb-2">
          <div className="flex gap-11 pb-2 md:pb-0">
            <div className="flex items-center gap-2">
              <MdOutlineEmail />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <PiPhoneCallDuotone />
              <p>(12345)67890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <p>English</p>
              <IoIosArrowDown className="text-lg" />
            </div>
            <div className="flex items-center">
              <p>USD</p>
              <IoIosArrowDown className="text-lg" />
            </div>
            <div className="flex items-center gap-2">
              <p>Login</p>
              <IoPersonAddOutline />
            </div>
            <div className="flex items-center gap-2">
              <p>Whislist</p>
              <CiHeart />
            </div>
            <div className="flex items-center">
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar-02 */}
      <div className="bg-white p-3 relative">
        <div className="w-full max-w-[1200px] flex justify-between items-center m-auto">
          {/* Logo */}
          <div>
            <h1 className="text-[#0D0E43] text-2xl font-extrabold tracking-wide josefin-sans">
              Hekto
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden sm:flex gap-6">
            <ul className="flex gap-6 lg:flex-row justify-between items-center">
              <li className="text-[#fefefe] flex items-center sm:text-[#FB2E86] hover:text-[#b52f7b] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Home <IoIosArrowDown className="text-lg ml-1" />
              </li>
              <li className="hover:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Pages
              </li>
              <li className="hover:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Products
              </li>
              <li className="hover:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Shop
              </li>
              <li className="hover:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className={`lg:flex justify-center h-9 hidden lg:block`}>
            <div className="flex items-center border-2 border-[#E7E6EF] bg-white rounded-lg w-[280px] h-full">
              <input
                type="text"
                className="outline-none p-2 w-full h-full text-sm"
              />
              <span className="text-xl ml-2 p-2 bg-[#FB2E86] text-[#F3F9FF] h-full flex items-center justify-center">
                <IoSearch />
              </span>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div>
            <GiHamburgerMenu
              className="text-3xl cursor-pointer block sm:hidden text-[#0D0E43]"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? "absolute top-full left-0 w-full bg-[#7E33E0] text-[#F1F1F1] flex flex-col items-center py-4"
              : "hidden"
          } sm:hidden`}
        >
          <ul className="flex flex-col gap-6">
            <li className="text-[#fefefe] flex items-center sm:text-[#FB2E86] hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Home <IoIosArrowDown className="text-lg ml-1" />
            </li>
            <li className="hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Pages
            </li>
            <li className="hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Products
            </li>
            <li className="hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Blog
            </li>
            <li className="hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Shop
            </li>
            <li className="hover:border-b-4 hover:border-[#FB2E86] transition-all duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
