"use client";

import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { navLinks } from "@/constants";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="grid w-full h-[50px] grid-cols-3 lg:grid-cols-2 px-6 md:px-10 py-6 bg-transparent fixed top-0 right-0 z-10 text-white">
      <div className="lg:hidden">
        <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="flex items-center justify-center text-[20px] md:text-[26px] lg:justify-start">
        <h1>Urban Garden</h1>
      </div>
      <div className="flex items-center justify-end text-[16px] gap-x-6  ">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.src}
            className="ml-4 text-[16px] hidden lg:flex"
          >
            {link.title}
          </a>
        ))}
        <a href="/" className="flex gap-x-2">
          ₱0.00
          <BsFillBagFill size={20} />
        </a>
        <a href="/" className="hidden lg:flex">
          <BiSolidUser size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
