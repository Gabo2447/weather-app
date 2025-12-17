import React from "react";
import WeatherDisplay from "@/components/weather/weatherDisplay";
import Search from "@/components/weather/search";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import { useWeatherStore } from "@/store/weatherStore";
import { generateAlphabet } from "@/utils/alphabet";

const weatherDashboard = () => {
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const loading = useWeatherStore((state) => state.loading);
  const weather = useWeatherStore((state) => state.weather);
  const error = useWeatherStore((state) => state.error);

  if (weather === null && !error && !loading)
    fetchWeather(generateAlphabet()[0]);

  const [search, setSearch] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(search);
  };
  return (
    <>
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        loading={loading}
      />
      {error && (
        <Alert
          variant={"destructive"}
          className="sm:w-1/5 w-full mx-auto my-[17dvh]"
        >
          <AlertTitle className="flex gap-2 items-center text-sm sm:text-lg font-semibold">
            <AlertCircle className="size-4 sm:size-5" />
            {error}
          </AlertTitle>
          <AlertDescription className="text-[1rem]">
            The city {search} is not correctly.
            <br /> Please enter the location correctly
          </AlertDescription>
        </Alert>
      )}

      {weather && <WeatherDisplay {...weather} />}
    </>
  );
};

export default weatherDashboard;
