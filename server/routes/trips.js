import express from 'express';
import { getTrips, getTrip } from '../controllers/trips';
import { verifyToken } from '../helpers/util';

const router = express.Router();

router.post('/', verifyToken, getTrips);
router.get('/:id', verifyToken, getTrip);
export default router;
