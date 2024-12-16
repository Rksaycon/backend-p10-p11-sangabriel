const express = require('express');
const { register, login } = require('../controllers/authController');  // Import the functions from the controller
const router = express.Router();  // Create a new router instance

// Route for registering a new user
router.post('/register', register);

// Route for logging in
router.post('/login', login);

module.exports = router;  // Export the router to use in your main server.js file
