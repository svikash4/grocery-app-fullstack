const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

app.listen(3000, () => console.log('API running on http://localhost:3000'));
