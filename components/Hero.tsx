import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-hero-bg h-[600px] bg-cover bg-center bg-no-repeat flex justify-center items-center ">
      <div className="flex flex-col items-center justify-center text-center text-white gap-y-6">
        <h2 className="text-md">WELCOME TO THE URBAN GARDEN</h2>
        <h1 className="text-[36px]">Bringing Nature to Urban Dwellers</h1>
        <Link href="/" className="px-6 py-3 text-black bg-white">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
