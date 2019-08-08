import express from 'express';
import { getTrip, createTrip, getTrips, cancelTrip } from '../controllers/trips';
import { verifyToken } from '../helpers/util';

const router = express.Router();

router.post('/', verifyToken, createTrip);
router.get('/:id', verifyToken, getTrip);
router.get('/', verifyToken,getTrips);
router.patch('/:id/cancel',verifyToken,cancelTrip);
export default router;