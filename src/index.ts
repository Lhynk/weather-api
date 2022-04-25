import express, { Express } from 'express';
import morgan from 'morgan';

import weatherRouter from './routes/weather.route';

const app: Express = express();
const port: string | number = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api', weatherRouter);

app.listen(port, () => console.log(`LWeather API is running on port ${port}`));
