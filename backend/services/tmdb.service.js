import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY, // Ensure a space after "Bearer"
      },
    };

    const response = await axios.get(url, options);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data from TMDB: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data from TMDB:",
      error.response ? error.response.data : error.message
    );
    throw error; // Re-throw the error after logging it
  }
};
