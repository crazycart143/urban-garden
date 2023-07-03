import { Hero, PlantCard } from "@/components";
import { PlantProps } from "@/types";
import { fetchPlants } from "@/utils";

export default async function Home() {
  const allPlantsObject = await fetchPlants();
  const allPlants: PlantProps[] = Object.values(allPlantsObject);

  const isDataEmpty =
    !Array.isArray(allPlants) || allPlants.length < 1 || !allPlants;

  return (
    <main className="relative w-full">
      <Hero />
      {!isDataEmpty ? (
        <section className="max-width">
          {allPlants?.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>
      ) : (
        <div>empty</div>
      )}
    </main>
  );
}
