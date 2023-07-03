import axios from "axios";

export async function fetchPlants() {
  try {
    const response = await axios.get(
      "https://perenual.com/api/species-list?page=1&key=sk-IuzV64a2806d5463b1453"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
