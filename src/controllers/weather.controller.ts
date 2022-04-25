import { Request, Response } from 'express';

import { requestLocation } from '../services/weather.service';

async function getLocation(req: Request, res: Response): Promise<any> {
  try {
    const location = req.query.name as string;

    const result = await requestLocation(location);

    return res.json(result);
  } catch (error: any) {
    return res.status(error.code).json({ msg: error.message });
  }
}

export const WeatherController = {
  getLocation,
};
