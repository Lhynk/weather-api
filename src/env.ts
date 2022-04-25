const WEATHER_URI = process.env.WEATHER_URI as string;
const LOCATION_ENDPOINT = process.env.LOCATION_ENDPOINT as string;
const WEATHER_ENDPOINT = process.env.WEATHER_ENDPOINT as string;

export const API_KEY = process.env.API_KEY as string;

export const ENDPOINTS = {
  API_KEY,
  LOCATION: `${WEATHER_URI}${LOCATION_ENDPOINT}`,
  WEATHER: `${WEATHER_URI}${WEATHER_ENDPOINT}`,
};
