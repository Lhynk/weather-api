import express, { Express } from 'express';

const app: Express = express();
const port: string | number = process.env.PORT || 3001;

app.listen(port, () => console.log(`LWeather API is running on port ${port}`));
