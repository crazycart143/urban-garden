import { PlantList } from "@/components";
import { fetchPlants } from "@/utils";
import React from "react";

export default async function page() {
  const allPlantsObject = await fetchPlants();

  const isDataEmpty = !allPlantsObject || allPlantsObject.length < 1;

  const filteredPlants = allPlantsObject?.slice(0, 9) ?? [];

  return (
    <section className="bg-gray-100 w-full h-full flex justify-center items-center py-6 px-4 max-width">
      <div className="bg-white w-full h-full px-6 py-4">
        <span className="flex justify-start items-start text-gray-500 text-sm">
          Home / Shop
        </span>
        <div className="flex justify-between items-center">
          <p>Showing 1 - 9 of 25 results</p>
        </div>
        <div className="flex mt-10">
          <PlantList filteredPlants={filteredPlants} />
        </div>
      </div>
    </section>
  );
}
