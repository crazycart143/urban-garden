import { Hero, PlantList, Story } from "@/components";
import { PlantProps } from "@/types";
import { fetchPlants } from "@/utils";

export default async function Home() {
  const allPlantsObject = await fetchPlants();

  const isDataEmpty = !allPlantsObject || allPlantsObject.length < 1;

  const filteredPlants = allPlantsObject
    ?.filter(
      (plant: PlantProps) => !plant.category.includes("Plant accessories")
    )
    .slice(0, 6);

  return (
    <main className="relative w-full">
      <section>
        <Hero />
      </section>
      <section>
        {!isDataEmpty ? (
          <PlantList filteredPlants={filteredPlants as PlantProps[]} />
        ) : (
          <div>empty</div>
        )}
      </section>
      <section>
        <Story />
      </section>
    </main>
  );
}
