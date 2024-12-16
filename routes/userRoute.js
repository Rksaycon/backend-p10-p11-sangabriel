const express = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
// const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.get('/',  getAllUsers); // Get all users
router.get('/:id',  getUserById); // Get user by ID
router.post('/',  createUser); // Create a new user
router.put('/:id', updateUser); // Update user by ID
router.delete('/:id',  deleteUser); // Delete user by ID

module.exports = router;
