import { Hero, PlantCard } from "@/components";
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
      <Hero />
      {!isDataEmpty ? (
        <section className="flex flex-wrap items-center justify-start md:justify-start xs:px-0 sm:px-6 sm:justify-start sm:gap-x-4 xs:justify-center py-20 px-6 md:px-10 lg:px-[140px] gap-x-10 gap-y-10">
          <div className="flex items-center justify-center w-full md:justify-start ">
            <h1 className="text-[40px] ">New Plants</h1>
          </div>
          {filteredPlants?.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </section>
      ) : (
        <div>empty</div>
      )}
    </main>
  );
}
