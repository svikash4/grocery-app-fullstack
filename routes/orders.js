const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../dbconfig');

router.post('/order', async (req, res) => {
  const { userId, items } = req.body;
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`INSERT INTO Orders (UserId, OrderDate) OUTPUT INSERTED.Id VALUES (${userId}, GETDATE())`;
    const orderId = result.recordset[0].Id;

    for (let item of items) {
      await sql.query`INSERT INTO OrderItems (OrderId, ProductId, Quantity) VALUES (${orderId}, ${item.productId}, ${item.quantity})`;
    }

    res.sendStatus(200);
  } catch (err) {
    console.error('ORDER ERROR:', err);
    res.status(500).send(err.message);
  }
});

module.exports = router;
