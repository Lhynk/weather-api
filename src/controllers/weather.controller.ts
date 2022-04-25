import { Request, Response } from 'express';

import { Units } from '../models/weatherRequest.model';
import { requestLocation, requestWeather } from '../services/weather.service';

async function getLocation(req: Request, res: Response): Promise<any> {
  try {
    const location = req.query.name as string;

    const result = await requestLocation(location);

    return res.json(result);
  } catch (error: any) {
    console.log(error);
    return res.status(error.code).json({ msg: error.message });
  }
}

async function getWeather(req: Request, res: Response): Promise<any> {
  try {
    const { lat, lon, units } = req.query as { lat: string; lon: string; units: Units };

    const result = await requestWeather(lat, lon, units);

    return res.json(result);
  } catch (error: any) {
    console.log(error);
    return res.status(error.code).json({ msg: error.message });
  }
}

export const WeatherController = {
  getLocation,
  getWeather,
};
