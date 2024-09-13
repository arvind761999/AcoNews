const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);

module.exports = app;
