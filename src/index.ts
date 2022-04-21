import express, { Express } from 'express';

import weatherRouter from './routes/weather.route';

const app: Express = express();
const port: string | number = process.env.PORT || 3001;

app.use('/api/weather', weatherRouter);

app.listen(port, () => console.log(`LWeather API is running on port ${port}`));
