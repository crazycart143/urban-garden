import React from "react";
import { fetchPlants } from "@/utils";

const FeaturedProducts = () => {
  console.log(fetchPlants);
  return (
    <section className="w-full px-16 py-10">
      <h1>New Plants</h1>
      <div></div>
    </section>
  );
};

export default FeaturedProducts;
