import express from 'express';
import { getTrip, createTrip } from '../controllers/trips';
import { verifyToken } from '../helpers/util';

const router = express.Router();

router.post('/', verifyToken, createTrip);
router.get('/:id', verifyToken, getTrip);
export default router;