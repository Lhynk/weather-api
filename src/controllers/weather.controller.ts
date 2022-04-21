import { Request, Response } from 'express';

import { requestLocation } from '../services/weather.service';

async function getLocation(req: Request, res: Response): Promise<any> {
  try {
    const location = req.query.l as string;

    const result = await requestLocation(location);

    return res.json(result);
  } catch (err) {
    console.log(err);
    return;
  }
}

export const WeatherController = {
  getLocation,
};
