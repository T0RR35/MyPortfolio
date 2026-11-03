import { useEffect, useState } from "react";
import { getWeather } from "@/services/weatherService";

export type Temperatures = [celsius: string, fahrenheit: string];

const cache = new Map<string, Temperatures>();

export function useTemperature(city: string, language: string): Temperatures | null {
    const key = `${city}|${language}`;  

    const [temperatures, setTemperatures] = useState<Temperatures | null>(() => cache.get(key) ?? null);

    useEffect(() => {
        const cached = cache.get(key);
        if (cached) {
            setTemperatures(cached);
            return;
        }

        let cancelled = false;

        getWeather(city, language)
            .then((value: Temperatures) => {
                cache.set(key, value);
                if (!cancelled) setTemperatures(value);
            })
            .catch(() => {
                if (!cancelled) setTemperatures(null);
            });

        return () => {
            cancelled = true;
        };
    }, [city, language, key]);

    return temperatures;
}