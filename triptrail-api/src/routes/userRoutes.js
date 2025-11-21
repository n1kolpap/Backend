import express from 'express';
import { signUp, logIn } from '../controllers/userController.js';

const router = express.Router();

// Route to create a new user
router.post('/', signUp);

// Route to log in a user
router.put('/login', logIn);

export default router;