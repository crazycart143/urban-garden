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
      } flex flex-col w-full max-width `}
    >
      <div
        className={`${
          pathname === "/shop" ? "hidden" : "flex"
        } items-center w-full sm:justify-start xs:justify-center`}
      >
        <h1 className="xs:text-[34px] sm:text-[40px]">New Plants</h1>
      </div>
      <div className="grid grid-cols-3 mt-10 gap-y-10 gap-x-4 lg:gap-x-6 xl:gap-x-0">
        {filteredPlants?.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
};

export default PlantList;
