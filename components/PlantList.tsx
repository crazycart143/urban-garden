import React from "react";
import PlantCard from "./PlantCard";
import { PlantProps } from "@/types";

interface PlantListProps {
  filteredPlants: PlantProps[];
}

const PlantList = ({ filteredPlants }: PlantListProps) => {
  return (
    <section className="flex flex-col items-start justify-start w-full px-6 pt-10 pb-20 lg:px-20 max-width">
      <div className="flex items-center w-full sm:justify-start xs:justify-center ">
        <h1 className="xs:text-[34px] sm:text-[40px]">New Plants</h1>
      </div>
      <div className="flex flex-wrap items-center mt-10 justify-evenly gap-y-10 gap-x-2 sm:gap-x-4 md:gap-x-2">
        {filteredPlants?.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantList;
