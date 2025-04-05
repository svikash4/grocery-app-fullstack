const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

// Mount routes under /api
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', orderRoutes);

// Health check route
app.get('/ping', (req, res) => {
  res.send('API is alive 🔥');
});

// ✅ Use Azure-provided PORT, fallback to 3000 for local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
