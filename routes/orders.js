const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../dbconfig');

router.post('/order', async (req, res) => {
  const { userId, items } = req.body;
  try {
    await sql.connect(dbConfig);

    const orderResult = await sql.query`
      INSERT INTO Orders (UserId, OrderDate)
      OUTPUT INSERTED.Id
      VALUES (${userId}, GETDATE())
    `;
    const orderId = orderResult.recordset[0].Id;

    for (const item of items) {
      await sql.query`
        INSERT INTO OrderItems (OrderId, ProductId, Quantity)
        VALUES (${orderId}, ${item.productId}, ${item.quantity})
      `;
    }

    res.status(200).send('Order placed successfully');
  } catch (err) {
    console.error('ORDER ERROR:', err.message);
    res.status(500).send('Error placing order: ' + err.message);
  }
});

module.exports = router;
