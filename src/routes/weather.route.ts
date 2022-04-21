import express from 'express';

import { WeatherController } from '../controllers/weather.controller';

const router = express.Router();

router.get('/location', WeatherController.getLocation);

export default router;
