"use client";

import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { navLinks } from "@/constants";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={`${
        pathname === "/shop" ? "flex h-[80px]" : "absolute "
      } top-0 left-0 right-0 z-10 bg-transparent max-width`}
    >
      <div className="grid w-full h-[50px] grid-cols-3 lg:grid-cols-2 px-6 md:px-10 py-6 ">
        <div className="lg:hidden">
          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div
          className={`${
            pathname === "/shop" ? "text-black" : "text-white"
          } flex items-center justify-center text-[20px] md:text-[26px] lg:justify-start `}
        >
          <h1>Urban Garden</h1>
        </div>
        <div className="flex items-center justify-end text-[16px] gap-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.src}
              className={`${
                pathname === "/shop" ? "text-black" : "text-white"
              } ml-4 text-[16px] hidden lg:flex`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/"
            className={`flex gap-x-2 ${
              pathname === "/shop" ? "text-[#5C9735]" : "text-white"
            }`}
          >
            ₱0.00
            <div className="relative">
              <BsFillBagFill size={20} />
              <span
                className={`${
                  pathname === "/shop" ? "bg-[#5C9735] text-white" : "bg-white"
                } absolute -top-2 -right-[12px] text-black rounded-full text-sm px-[6px]`}
              >
                0
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className={`${
              pathname === "/shop" ? "text-black" : "text-white"
            } hidden lg:flex`}
          >
            <BiSolidUser size={26} />
          </Link>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        } w-full block flex-grow bg-white h-[100vh] z-50 fixed top-0 left-0 py-[50px] lg:hidden transition-all`}
      >
        <div className="flex items-end justify-end mr-[50px]">
          <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <div className="flex flex-col text-[#5C9735] mt-[50px] w-full">
          <div className="pl-[50px] hover:bg-gray-100 py-4 cursor-pointer">
            <h1 className="text-[24px] font-bold text-[#5C9735] tracking-wider  ">
              Urban Garden
            </h1>
          </div>
          <Link
            className="py-[10px] text-[18px] pl-[50px] hover:bg-gray-100"
            href="/"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <a
            className="py-[10px] hover:bg-gray-100 text-[18px] pl-[50px]"
            href="#skills"
            onClick={() => setIsOpen(!isOpen)}
          >
            Plants
          </a>
          <a
            className="py-[10px] hover:bg-gray-100 text-[18px] pl-[50px]"
            href="#projects"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </a>
          <a
            className="py-[10px] hover:bg-gray-100 text-[18px] pl-[50px]"
            href="#contact"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
