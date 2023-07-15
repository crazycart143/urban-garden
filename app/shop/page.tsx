import { PlantList } from "@/components";
import { fetchPlants } from "@/utils";
import React from "react";

export default async function page() {
  const allPlantsObject = await fetchPlants();

  const isDataEmpty = !allPlantsObject || allPlantsObject.length < 1;

  const filteredPlants = allPlantsObject?.slice(0, 9) ?? [];

  return (
    <section className="bg-gray-100 w-full h-full flex py-6 px-4 lg:px-[100px] xl:px-[180px] lg:py-14 max-width">
      <div className="bg-white w-full h-full py-4 md:py-12 xl:pl-[80px] px-4 sm:px-8 md:px-10">
        <div className="flex flex-col w-full">
          <span className="flex justify-start items-start text-gray-500 text-sm sm:text-base">
            Home / Shop
          </span>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600 sm:text-base">
            <p>Showing 1 - 9 of 25 results</p>
          </div>
        </div>
        <PlantList filteredPlants={filteredPlants} />
      </div>
    </section>
  );
}
