"use client";

import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="grid w-full h-[50px] grid-cols-3 md:grid-cols-2 px-10 py-6 bg-transparent fixed top-0 right-0 z-10 text-white">
      <div className="md:hidden">
        <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="flex items-center justify-center text-[20px] md:text-[26px] md:justify-start">
        <h1>Urban Garden</h1>
      </div>
      <div className="flex items-center justify-end text-[16px]">₱0.00</div>
    </nav>
  );
};

export default Navbar;
