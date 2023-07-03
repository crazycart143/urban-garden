import React from "react";
import { PlantProps } from "@/types";

interface PlantCardProps {
  plant: PlantProps;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const {
    common_name,
    scientific_name,
    other_name,
    cycle,
    watering,
    sunlight,
    default_image,
  } = plant;
  return <div>PlantCard</div>;
};

export default PlantCard;
