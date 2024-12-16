// database.js
const mysql = require('mysql2/promise');  // Use promise-based mysql2
const dotenv = require('dotenv');        // Import dotenv to manage environment variables

dotenv.config();  // Load the environment variables from the .env file

// Create a pool of connections to the database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;  // Export the connection pool to use in other parts of the app
