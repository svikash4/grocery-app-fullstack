const express = require('express');
const router = express.Router();
const { database } = require('../dbconfig');

const orders = database.container('Orders');

router.post('/order', async (req, res) => {
  const { userId, items } = req.body;
  try {
    const order = {
      id: `${userId}-${Date.now()}`,
      userId,
      orderDate: new Date().toISOString(),
      items
    };
    await orders.items.create(order);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
