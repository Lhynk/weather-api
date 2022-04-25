import express from 'express';
import { query } from 'express-validator';

import { WeatherController } from '../controllers/weather.controller';
import validate from '../utils/schemeValidator.util';

const locationSchema = [query('name', 'Name is required').exists()];

const router = express.Router();

router.get('/location', validate(locationSchema), WeatherController.getLocation);
router.get('/weather', WeatherController.getWeather);

export default router;
