import axios from 'axios';

import { API_KEY, ENDPOINTS } from '../env';
import { LocationRequest } from '../models/locationRequest.model';
import { LocationResponse } from '../models/locationResponse.model';
import { RequestError } from '../models/requestError.model';
import { AxiosMapper } from '../utils/axiosMapper.util';

export async function requestLocation(location: string): Promise<Array<LocationResponse>> {
  const locationParams: LocationRequest = {
    q: location,
    appid: API_KEY,
    limit: 5,
  };

  try {
    const { data } = await axios.get(ENDPOINTS.LOCATION, {
      params: locationParams,
    });

    return AxiosMapper.toLocationResponse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO: Log errors to db using error.response.data info
      console.log(error.response?.data);
      throw { code: error.response?.status, message: error.response?.statusText } as RequestError;
    }
    return [];
  }
}
