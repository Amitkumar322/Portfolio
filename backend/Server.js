const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require('./config/db');

const app = express();

// DB connect
connectdb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/contactRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('Backend running 🚀');
});

// PORT FIX (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});