require('dotenv').config();
const express = require('express');
require('./config/connection');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});