import Link from "next/link";
import React from "react";

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
        <Link
          href="/shop"
          className="bg-white xs:py-2 py-4 px-8 text-black font-medium text-[18px]"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
