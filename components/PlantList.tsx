"use client";

import React from "react";
import PlantCard from "./PlantCard";
import { PlantProps } from "@/types";
import { usePathname } from "next/navigation";

interface PlantListProps {
  filteredPlants: PlantProps[];
}

const PlantList = ({ filteredPlants }: PlantListProps) => {
  const pathname = usePathname();
  return (
    <section
      className={`${
        pathname === "/shop" ? "pt-0" : "px-6 pt-10 pb-10 sm:pb-20 lg:px-20"
      } flex flex-col items-start justify-start w-full max-width`}
    >
      <div
        className={`${
          pathname === "/shop" ? "hidden" : "flex"
        } items-center w-full sm:justify-start xs:justify-center`}
      >
        <h1 className="xs:text-[34px] sm:text-[40px]">New Plants</h1>
      </div>
      <div className="flex flex-wrap items-start mt-10 justify-start gap-y-10 gap-x-4 sm:gap-x-10">
        {filteredPlants?.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantList;
