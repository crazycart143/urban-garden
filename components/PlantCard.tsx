import React from "react";
import { PlantProps } from "@/types";
import Image from "next/image";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { id, name, ratings, category, price, image } = plant;

  return (
    <div className="flex w-[350px] text-black flex-col cursor-pointer">
      <Image
        src={image}
        width={350}
        height={550}
        alt={name}
        className="object-contain"
      />
      <h1>Stars</h1>
      <h1 className="text-xl text-[#141A0F]">{name}</h1>
      <p className="text-lg text-gray-400">{category}</p>
      <p className="font-medium text-[20px] text-[#4D4F59] tracking-wider">
        ₱{price}
      </p>
    </div>
  );
};

export default PlantCard;
