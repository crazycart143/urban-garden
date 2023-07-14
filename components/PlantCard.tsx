"use client";

import React from "react";
import { PlantProps } from "@/types";
import Image from "next/image";
import { BsFillBagFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { id, name, ratings, category, price, image } = plant;
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname === "/shop" ? "w-[24vw]" : ""
      } relative flex flex-col cursor-pointer group`}
    >
      <Image
        src={image}
        width={180}
        height={350}
        alt={name}
        className={`${
          pathname === "/shop"
            ? "xs:w-[24vw]"
            : "w-[36vw] sm:w-[28vw] lg:w-[24vw] xl:w-[340px]"
        } object-contain  `}
      />
      <h1>Stars</h1>
      <h1
        className={`${
          pathname === "/shop"
            ? "xs:text-[2vw] sm:text-[4vw]"
            : " xs:text-[4vw] sm:text-[2vw] lg:text-[26px] "
        }text-[#141A0F] break-words `}
      >
        {name}
      </h1>
      <p
        className={`${
          pathname === "/shop"
            ? "xs:text-[2.2vw] sm:text-[2vw]"
            : "xs:text-[4vw] sm:text-[2vw] lg:text-[20px]"
        } text-gray-400`}
      >
        {category}
      </p>
      <p
        className={`${
          pathname === "/shop"
            ? "text-[2.5vw]"
            : "xs:text-[4vw] sm:text-[2vw] lg:text-[22px]"
        } font-medium  text-[#4D4F59] tracking-wider `}
      >
        ₱{price}
      </p>
      <div className="absolute flex items-center justify-center w-10 h-10 transition duration-200 ease-in-out bg-white rounded-full opacity-0 group-hover:opacity-100 top-4 right-4 ">
        <BsFillBagFill size={20} color="gray" />
      </div>
    </div>
  );
};

export default PlantCard;
