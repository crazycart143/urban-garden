import { Hero, PlantCard } from "@/components";
import { PlantProps } from "@/types";
import { fetchPlants } from "@/utils";

export default async function Home() {
  const allPlantsObject = await fetchPlants();

  const isDataEmpty =
    !allPlantsObject ||
    !allPlantsObject.data ||
    allPlantsObject.data.length < 1;

  return (
    <main className="relative w-full">
      <Hero />
      {!isDataEmpty ? (
        <section className="flex flex-wrap items-center justify-center px-20 py-20 max-width gap-x-10 gap-y-10">
          <div className="inline-block w-full">
            <h1 className="text-[40px] ">New Plants</h1>
          </div>
          {allPlantsObject.data.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>
      ) : (
        <div>empty</div>
      )}
    </main>
  );
}
