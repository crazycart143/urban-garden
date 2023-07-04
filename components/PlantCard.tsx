import React from "react";
import { PlantProps } from "@/types";
import Image from "next/image";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { id, name, ratings, category, price, image } = plant;

  return (
    <div className="flex w-[350px] text-black flex-col">
      <Image
        src={image}
        width={350}
        height={550}
        alt={name}
        className="object-contain"
      />
      <h1>Stars</h1>
      <h1>{name}</h1>
      <p className="text-gray-400 text-sm">{category}</p>
      <p className="font-bold">₱{price}</p>
    </div>
  );
};

export default PlantCard;
