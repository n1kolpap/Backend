const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const { mongoURI } = require('./config/constants');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Database connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = app;