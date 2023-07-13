import { navLinks } from "@/constants";
import React from "react";
import CustomButton from "./CustomButton";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#141A0F] text-white px-10">
      <div className="flex py-10">
        {navLinks.map((link, index) => (
          <a key={index} href={link.src} className="ml-4 text-sm ">
            {link.title}
          </a>
        ))}
      </div>
      <form className="flex flex-col items-center justify-center gap-y-4 ">
        <label className="text-[30px]">Subscribe to our newsletter</label>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full md:w-[400px] px-2 py-2"
          />
          <CustomButton
            title="Subscribe"
            containerStyles="py-2 px-4 bg-[#5C9735]"
          />
        </div>
      </form>
      <div className="flex mt-10 text-gray-400 gap-x-4 text-[20px]">
        <AiOutlineInstagram className="cursor-pointer" />
        <BiLogoFacebookCircle className="cursor-pointer" />
        <BsTwitter className="cursor-pointer" />
      </div>
      <p className="mt-20 text-sm text-gray-400">
        © 2023 Urban Garden. Made by Keanu John Lariosa
      </p>
    </div>
  );
};

export default Footer;
