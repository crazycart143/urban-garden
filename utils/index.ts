import data from "../data/data.json";

export async function fetchPlants() {
  try {
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
