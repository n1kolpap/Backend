const express = require('express');
const { signUp, logIn } = require('../controllers/userController');
const { validateUser } = require('../middleware/validation');

const router = express.Router();

// Route to create a new user
router.post('/user', validateUser, signUp);

// Route to log in a user
router.put('/user/login', validateUser, logIn);

module.exports = router;