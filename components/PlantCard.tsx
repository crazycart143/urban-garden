import React from "react";
import { PlantProps } from "@/types";
import Image from "next/image";
import { BsFillBagFill } from "react-icons/bs";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { id, name, ratings, category, price, image } = plant;

  return (
    <div className="relative flex flex-col text-black cursor-pointer group">
      <Image
        src={image}
        width={180}
        height={350}
        alt={name}
        className="object-contain w-[36vw] sm:w-[28vw] lg:w-[24vw] xl:w-[340px]"
      />
      <h1>Stars</h1>
      <h1 className="xs:text-[4vw] sm:text-[2vw] lg:text-[26px] text-[#141A0F]">
        {name}
      </h1>
      <p className="text-gray-400 xs:text-[4vw] sm:text-[2vw] lg:text-[20px]">
        {category}
      </p>
      <p className="font-medium xs:text-[4vw] text-[#4D4F59] tracking-wider sm:text-[2vw] lg:text-[22px]">
        ₱{price}
      </p>
      <div className="absolute items-center justify-center hidden w-10 h-10 bg-white rounded-full top-4 right-4 group-hover:flex">
        <BsFillBagFill
          className="duration-500 ease-in-out opacity-0 group-hover:opacity-100"
          size={20}
          color="gray"
        />
      </div>
    </div>
  );
};

export default PlantCard;
