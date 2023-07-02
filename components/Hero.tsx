import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="w-full bg-hero-bg h-[600px] md:h-[800px]  bg-cover bg-center bg-no-repeat flex justify-center items-center ">
      <div className="flex flex-col items-center justify-center text-center text-white gap-y-6 lg:gap-y-10">
        <h2 className="tracking-wider text-md lg:text-lg">
          WELCOME TO THE URBAN GARDEN
        </h2>
        <h1 className="text-[36px] md:text-[40px] lg:text-[50px]">
          Bringing Nature to Urban Dwellers
        </h1>
        <CustomButton
          title="Shop Now"
          containerStyles="bg-white  py-4 px-8 text-black"
          textStyles="font-semibold"
        />
      </div>
    </div>
  );
};

export default Hero;
