import { BaseApi } from './baseApi.model';

export interface WeatherRequest extends BaseApi {
  lon: string;
  lat: string;
  units: Units;
}

export enum Units {
  metric = 'metric',
  imperial = 'imperial',
}
