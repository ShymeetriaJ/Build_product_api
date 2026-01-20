require('dotenv').config();
const express = require('express');
require('./config/connection');
const productRoutes = require('./routes/productRoutes');

const app = express();