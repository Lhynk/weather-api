const OPEN_WEATHER_URI = 'https://api.openweathermap.org';

export const API_KEY = process.env.API_KEY as string;

export const ENDPOINTS = {
  API_KEY,
  LOCATION: `${OPEN_WEATHER_URI}/geo/1.0/direct`,
};
