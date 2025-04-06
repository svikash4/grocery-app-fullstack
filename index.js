const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// ✅ Allow only your frontend domain
const allowedOrigins = [
  'https://nice-sand-043374f10.6.azurestaticapps.net'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman or curl
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(bodyParser.json());

// 🔐 Optional: API Key Middleware (Uncomment if needed)
/*
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== 'vikash-secret-key') {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next();
});
*/

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
