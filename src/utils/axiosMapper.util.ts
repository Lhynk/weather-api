import { LocationResponse } from '../models/locationResponse.model';

const location = (response: string): Array<LocationResponse> => {
  const data = JSON.parse(response);

  return data.map(({ name, state, country, lat, lon }: LocationResponse) => ({ name, state, country, lat, lon }));
};

export const AxiosMapper = {
  location,
};
