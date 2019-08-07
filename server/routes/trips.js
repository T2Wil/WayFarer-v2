import express from 'express';
import { getTrips } from '../controllers/trips';
import { verifyToken } from '../helpers/util';

const router = express.Router();

router.post('/', verifyToken, getTrips);

export default router;
