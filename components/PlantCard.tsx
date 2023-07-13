import React from "react";
import { PlantProps } from "@/types";
import Image from "next/image";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { id, name, ratings, category, price, image } = plant;

  return (
    <div className="flex flex-col text-black cursor-pointer">
      <Image
        src={image}
        width={180}
        height={350}
        alt={name}
        className="object-contain w-[36vw] sm:w-[28vw] lg:w-[24vw]"
      />
      <h1>Stars</h1>
      <h1 className="xs:text-[4vw] sm:text-[2vw] lg:text-[1.5vw] text-[#141A0F]">
        {name}
      </h1>
      <p className="text-gray-400 xs:text-[4vw] sm:text-[2vw] lg:text-[1.5vw]">
        {category}
      </p>
      <p className="font-medium xs:text-[4vw] text-[#4D4F59] tracking-wider sm:text-[2vw] lg:text-[1.5vw]">
        ₱{price}
      </p>
    </div>
  );
};

export default PlantCard;
