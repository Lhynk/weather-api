import { WeatherInfo } from './weatherInfo.model';
import { Wind } from './wind.model';

export interface WeatherResponse {
  icon: string;
  status: string;
  info: WeatherInfo;
  wind: Wind;
}
