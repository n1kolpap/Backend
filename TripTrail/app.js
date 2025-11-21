const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const { connectDB } = require('./config/database');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Connect to the database
connectDB();

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});