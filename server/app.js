import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import tripsRoutes from './routes/trips';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/trips', tripsRoutes);


export default app;
