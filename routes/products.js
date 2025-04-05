const express = require('express');
const router = express.Router();
const { database } = require('../dbconfig');

const products = database.container('Products');

router.get('/products', async (req, res) => {
  try {
    const { resources } = await products.items.query("SELECT * FROM c").fetchAll();
    res.json(resources);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
