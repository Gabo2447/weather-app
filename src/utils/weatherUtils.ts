import drizzleIcon from "@/assets/icon-drizzle.webp";
import fogIcon from "@/assets/icon-fog.webp";
import overcastIcon from "@/assets/icon-overcast.webp";
import partlyCloudyIcon from "@/assets/icon-partly-cloudy.webp";
import rainIcon from "@/assets/icon-rain.webp";
import snowIcon from "@/assets/icon-snow.webp";
import stormIcon from "@/assets/icon-storm.webp";
import sunnyIcon from "@/assets/icon-sunny.webp";

export const getWeatherIcon = (code: number): string => {
  const codeMap: Record<number, string> = {
    // Sunny / Clear
    1000: sunnyIcon,
    // Partly cloudy
    1003: partlyCloudyIcon,
    // Cloudy
    1006: overcastIcon,
    // Overcast
    1009: overcastIcon,
    // Mist
    1030: fogIcon,
    // Patchy rain possible
    1063: rainIcon,
    // Patchy snow possible
    1066: snowIcon,
    // Patchy sleet possible
    1069: snowIcon,
    // Patchy freezing drizzle possible
    1072: drizzleIcon,
    // Thundery outbreaks possible
    1087: stormIcon,
    // Blowing snow
    1114: snowIcon,
    // Blizzard
    1117: snowIcon,
    // Fog
    1135: fogIcon,
    // Freezing fog
    1147: fogIcon,
    // Patchy light drizzle
    1150: drizzleIcon,
    // Light drizzle
    1153: drizzleIcon,
    // Freezing drizzle
    1168: drizzleIcon,
    // Heavy freezing drizzle
    1171: drizzleIcon,
    // Patchy light rain
    1180: rainIcon,
    // Light rain
    1183: rainIcon,
    // Moderate rain at times
    1186: rainIcon,
    // Moderate rain
    1189: rainIcon,
    // Heavy rain at times
    1192: rainIcon,
    // Heavy rain
    1195: rainIcon,
    // Light freezing rain
    1198: rainIcon,
    // Moderate or heavy freezing rain
    1201: rainIcon,
    // Light sleet
    1204: snowIcon,
    // Moderate or heavy sleet
    1207: snowIcon,
    // Patchy light snow
    1210: snowIcon,
    // Light snow
    1213: snowIcon,
    // Patchy moderate snow
    1216: snowIcon,
    // Moderate snow
    1219: snowIcon,
    // Patchy heavy snow
    1222: snowIcon,
    // Heavy snow
    1225: snowIcon,
    // Ice pellets
    1237: snowIcon,
    // Light rain shower
    1240: rainIcon,
    // Moderate or heavy rain shower
    1243: rainIcon,
    // Torrential rain shower
    1246: rainIcon,
    // Light sleet showers
    1249: snowIcon,
    // Moderate or heavy sleet showers
    1252: snowIcon,
    // Light snow showers
    1255: snowIcon,
    // Moderate or heavy snow showers
    1258: snowIcon,
    // Light showers of ice pellets
    1261: snowIcon,
    // Moderate or heavy showers of ice pellets
    1264: snowIcon,
    // Patchy light rain with thunder
    1273: stormIcon,
    // Moderate or heavy rain with thunder
    1276: stormIcon,
    // Patchy light snow with thunder
    1279: stormIcon,
    // Moderate or heavy snow with thunder
    1282: stormIcon,
  };

  return codeMap[code] || sunnyIcon;
};
