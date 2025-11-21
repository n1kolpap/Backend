import express from 'express';
import { signUp, logIn } from '../controllers/userController.js';
import { validateUser } from '../middleware/validation.js';

const router = express.Router();

// Route to create a new user
router.post('/user', validateUser, signUp);

// Route to log in a user
router.put('/user/login', validateUser, logIn);

export default router;