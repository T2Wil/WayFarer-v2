import express from 'express';
import { signinController, signupController } from '../controllers/auth';
import { validateSignin, validateSignup } from '../middleware/validator';

const router = express.Router();

router.post('/signup', validateSignup, signupController);
router.post('/signin', validateSignin, signinController);

export default router;
