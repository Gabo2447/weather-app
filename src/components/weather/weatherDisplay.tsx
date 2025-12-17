import type { WeatherResponse } from "@/types/weather";
import Section from "@/components/global/section";
import { Card } from "../ui/card";
import Title from "../global/title";
import { dayCodes } from "@/constants/weather";
import { getWeatherIcon } from "@/utils/weatherUtils";

const weatherDisplay = (weather: WeatherResponse) => {
  const { current, location, forecast } = weather;

  const date = new Date(current.last_updated)
    .toDateString()
    .split(" ")
    .join(", ");

  const dailyForecast = forecast.forecastday.map((day) => (
    <li key={day.date}>
      <Card className="p-4 flex flex-col text-center sm:text-left gap-0">
        <div className="sm:max-w-3/4 mx-auto">
          <h4 className="text-neutral-300 font-bold text-sm sm:text-xl w-fit sm:w-full text-center line-clamp-1">
            {dayCodes[new Date(day.date).getDay()]}
          </h4>
          <img
            src={getWeatherIcon(day.day.condition.code)}
            alt={day.day.condition.text}
            className="size-12 aspect-square sm:size-2/5 mx-auto"
          />
          <h2 className="text-sm text-[12px] text-center sm:text-xl text-neutral-200 mx-auto">
            {day.day.avgtemp_c}°
          </h2>
        </div>
      </Card>
    </li>
  ));

  return (
    <Section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
      <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
        <Card className="bg-[url('/assets/bg-today-small.svg')] rounded-4xl sm:bg-[url('/assets/bg-today-large.svg')] bg-cover text-center sm:text-left items-center size-full p-8 grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(350px,1fr))] gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <Title
                as="h3"
                className="text-2xl sm:text-4xl sm:w-fit text-blue-100 font-bold"
              >
                {location.name}, {location.country}
              </Title>
              <h4 className="text-neutral-300 text-xl">{date}</h4>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:items-end">
            <h2 className="text-6xl font-bold text-white">
              {current.temp_c}°C
            </h2>
            <h2 className="text-lg text-neutral-300">
              {current.condition.text}
            </h2>
          </div>
        </Card>

        <div className="my-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li>
              <Card className="p-4 gap-4">
                <h4 className="text-neutral-300">Feels Like</h4>
                <h2 className="text-2xl">{current.feelslike_c}°C</h2>
              </Card>
            </li>
            <li>
              <Card className="p-4 gap-4">
                <h4 className="text-neutral-300">Humididty</h4>
                <h2 className="text-2xl">{current.humidity}%</h2>
              </Card>
            </li>
            <li>
              <Card className="p-4 gap-4">
                <h4 className="text-neutral-300">Wind</h4>
                <h2 className="text-2xl">{current.wind_kph} km/h</h2>
              </Card>
            </li>
            <li>
              <Card className="p-4 gap-4">
                <h4 className="text-neutral-300">Precipitation</h4>
                <h2 className="text-2xl">{current.precip_mm} mm</h2>
              </Card>
            </li>
          </ul>
        </div>

        <div>
          <Title
            as={"h2"}
            className="text-2xl sm:text-3xl w-full sm:w-fit mb-8"
          >
            Daily Forecast
          </Title>
          <ul className="grid grid-cols-3 gap-4">{dailyForecast}</ul>
        </div>
      </div>

      <div className="col-span-1 p-6 bg-card rounded-4xl border">
        <Title as={"h2"} className="text-xl sm:text-2xl w-full sm:w-fit mb-8">
          Hourly Forecast
        </Title>
        <ul className="flex flex-col gap-4">
          {forecast.forecastday[0].hour.map((hour) => {
            let time = new Date(hour.time).getHours();
            let ampm = time < 12 ? time : time - 12;
            let stamp = time < 12 ? "AM" : "PM";

            if (time % 3 === 0) {
              if (ampm === 0) ampm = 12;
              return (
                <li key={hour.time}>
                  <div className="gap-0 px-4 py-1.5 rounded-lg flex justify-between bg-accent text-accent-foreground items-center transition-transform hover:scale-102 hover:-translate-y-2 duration-200 ease-in-out">
                    <h4 className="text-neutral-300">
                      {ampm} {stamp}
                    </h4>
                    <h2 className="text-2xl">{hour.temp_c}°C</h2>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </Section>
  );
};

export default weatherDisplay;
