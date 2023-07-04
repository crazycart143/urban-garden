import React from "react";
import { PlantProps } from "@/types";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const {
    id,
    common_name,
    scientific_name,
    other_name,
    cycle,
    watering,
    sunlight,
    default_image,
  } = plant;

  return <div className="flex w-full text-black">{common_name}</div>;
};

export default PlantCard;
