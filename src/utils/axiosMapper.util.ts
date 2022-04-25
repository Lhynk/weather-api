import { LocationResponse } from '../models/locationResponse.model';
import { GeoLocation } from '../models/vendor/geoLocation.model';

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

export const AxiosMapper = {
  toLocationResponse,
};
