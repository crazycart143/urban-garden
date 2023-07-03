import axios from "axios";

export async function fetchPlants() {
  const options = {
    method: "GET",
    url: "https://house-plants2.p.rapidapi.com/search",
    params: { query: "Fern" },
    headers: {
      "X-RapidAPI-Key": "d218346fa9msh2023ede40393546p11636ejsn6c3413b7fe00",
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
