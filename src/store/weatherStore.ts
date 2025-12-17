import { create } from "zustand";
import { getWeather } from "@/lib/weather";
import type { WeatherResponse } from "@/types/weather";

interface WeatherState {
  weather: WeatherResponse | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
  reset: () => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: null,

  fetchWeather: async (city: string) => {
    if (!city) return;

    set({ loading: true, error: null, weather: null });

    try {
      const data = await getWeather(city);

      if (data.error) {
        throw new Error(data.error.message);
      }

      set({ weather: data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Error al obtener el clima",
        loading: false,
        weather: null,
      });
    }
  },

  reset: () => set({ weather: null, loading: false, error: null }),
}));
