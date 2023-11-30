import express from 'express';
import { router } from './routes/routes';

export const app = express();

app.use(express.json())

app.get('/', (req, res) => res.send("<h1>Welcome to the drinks API!</h1>"));

app.use('/', router);