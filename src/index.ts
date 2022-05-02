import cors from 'cors';
import express, { Express } from 'express';
import morgan from 'morgan';

import weatherRouter from './routes/weather.route';

const app: Express = express();
const port: string | number = process.env.PORT || 3001;
const allowedOrigins = process.env.APP_URI?.split(',').map((url: string) => `${url}`);
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(options));

app.use('/api', weatherRouter);

if (process.env.NODE_ENV !== 'production') {
  console.log('Allowed origin: ', allowedOrigins);
}

app.listen(port, () => console.log(`LWeather API is running on port ${port}`));
