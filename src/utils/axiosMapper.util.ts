import { LocationResponse } from '../models/locationResponse.model';
import { GeoLocation } from '../models/vendor/geoLocation.model';
import { WeatherResponse } from '../models/weatherResponse.model';

/**
 * Convert response to json then use the callback to map
 * @param callback Function to be used to map
 * @returns Mapped object
 */
export const Mapper =
  <T, R>(callback: (a: R) => T) =>
  (response: string): T | null => {
    try {
      const data = JSON.parse(response) as R;
      return callback(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

/**
 * Map an object to LocationResponse
 * @param data Objecto to be mapped
 * @returns Mapped object
 */
const toLocationResponse = (data: Array<GeoLocation>): Array<LocationResponse> =>
  data.map(({ name, state, country, lat, lon }: GeoLocation) => ({ name, state, country, lat, lon }));

const toWeatherResponse = ({ weather, main, wind }: any): WeatherResponse => ({
  icon: weather[0] && weather[0].icon,
  status: weather[0] && weather[0].main,
  info: {
    temp: main.temp,
    pressure: main.pressure,
    humidity: main.humidity,
    feelsLike: main.feels_like,
    tempMin: main.temp_min,
    tempMax: main.temp_max,
  },
  wind: { speed: wind.speed, deg: wind.deg },
});

export const AxiosMapper = {
  toLocationResponse,
  toWeatherResponse,
};
