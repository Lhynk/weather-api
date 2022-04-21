import axios from 'axios';

import { ENDPOINTS } from '../env';
import { LocationRequest } from '../models/locationRequest.model';
import { LocationResponse } from '../models/locationResponse.model';
import { AxiosMapper } from '../utils/axiosMapper.util';

export async function requestLocation(location: string): Promise<Array<LocationResponse>> {
  const locationParams: LocationRequest = {
    q: location,
    appid: '96dcd046cd73567d3c9a602984fe30d8',
    limit: 5,
  };

  try {
    const { data } = await axios.get(ENDPOINTS.LOCATION, {
      params: locationParams,
      transformResponse: AxiosMapper.location,
    });

    return data;
  } catch (error) {
    return [];
  }
}
