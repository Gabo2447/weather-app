import { RAPID_KEY } from "./config";
const URL = "weatherapi-com.p.rapidapi.com";
const URL_QUERY = (city: string) =>
  `https://${URL}/forecast.json?q=${encodeURIComponent(city)}&days=7`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": URL,
    "X-RapidAPI-Key": `${RAPID_KEY}`,
  },
};

export const getWeather = async (city: string) => {
  const res = await fetch(URL_QUERY(city), options);
  const data = await res.json();
  return data;
};
