import express from 'express';
import { query } from 'express-validator';

import { WeatherController } from '../controllers/weather.controller';
import validate from '../utils/schemeValidator.util';

const locationSchema = [query('name', 'Name is required').exists()];
const weatherSchema = [
  query('lon', 'Longitude is required').exists().isNumeric(),
  query('lat', 'Latitude is required').exists().isNumeric(),
  query('units', 'Units value can only be metric or imperial').optional().isIn(['metric', 'imperial']),
];

const router = express.Router();

router.get('/location', validate(locationSchema), WeatherController.getLocation);
router.get('/weather', validate(weatherSchema), WeatherController.getWeather);

export default router;
