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
    </nav>
  );
};

export default Navbar;
