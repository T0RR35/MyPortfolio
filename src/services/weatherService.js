const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

const coordsCache = new Map();

async function getJson(url, signal) {
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error(`Open-Meteo HTTP ${response.status}`);
    return response.json();
}

async function getCoords(city, signal) {
    if (coordsCache.has(city)) return coordsCache.get(city);

    const params = new URLSearchParams({ name: city, count: "1", language: "pt", format: "json" });
    const data = await getJson(`${GEOCODING_URL}?${params}`, signal);

    const place = data.results?.[0];
    if (!place) throw new Error(`Cidade não encontrada: ${city}`);

    const coords = { latitude: place.latitude, longitude: place.longitude };
    coordsCache.set(city, coords);
    return coords;
}

export async function getWeather(city, language, { signal } = {}) {
    const { latitude, longitude } = await getCoords(city, signal);

    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        current: "temperature_2m",
        timezone: "auto",
    });
    const data = await getJson(`${FORECAST_URL}?${params}`, signal);

    const temperature = data.current?.temperature_2m;
    if (typeof temperature !== "number") throw new Error("Resposta sem temperatura");

    let celsius = Math.round(temperature);
    let fahrenheit = Math.round(celsius*1.8 + 32); 

    return [`${celsius}°C`, `${fahrenheit}°F`];
}