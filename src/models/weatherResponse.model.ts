import { WeatherInfo } from './weatherInfo.model';
import { Wind } from './wind.model';

export interface WeatherResponse {
  icon: string;
  info: WeatherInfo;
  wind: Wind;
}
