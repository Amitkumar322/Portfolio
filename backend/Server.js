const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require('./config/db');

const app = express();

connectdb();

app.use(cors());
app.use(express.json());

app.use('/api', require('./Routes/Contactroutes'));

app.listen(5000, () => console.log('Server running on port 5000 ✅'));