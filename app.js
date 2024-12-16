const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const userRoutes = require('./routes/userRoute'); // User routes
const pool = require('./config/database'); // Database connection pool

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Test route to verify server is running
app.get('/', (req, res) => {
  res.send("Hello, world! The server is running!");
});

// Route to check if API is working
app.get('/api', (req, res) => {
  res.send('API is working!');
});

// Authentication routes
app.use('/api/auth', authRoutes);

// User routes
app.use('/api/users', userRoutes); // Protected routes for user management

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log("Connected to the database successfully!");
    connection.release();
  })
  .catch(err => {
    console.error("Database connection error:", err.message);
  });

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
