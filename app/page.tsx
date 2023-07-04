import { Hero, PlantCard } from "@/components";
import { PlantProps } from "@/types";
import { fetchPlants } from "@/utils";

export default async function Home() {
  const allPlantsObject = await fetchPlants();

  const isDataEmpty = allPlantsObject.length < 1 || !allPlantsObject;

  return (
    <main className="relative w-full">
      <Hero />
      {!isDataEmpty ? (
        <section className="flex flex-wrap w-full px-20 py-20 max-width">
          <h1>New Plants</h1>
          {allPlantsObject.data.map((plant: PlantProps) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>
      ) : (
        <div>empty</div>
      )}
    </main>
  );
}
