import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d0b045bdc5msh218eb6d5ad78235p1db49ajsn37a4c8207f0f",
    },
  });

  return data;
};
