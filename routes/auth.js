const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../dbconfig');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await sql.connect(dbConfig);
    await sql.query`INSERT INTO Users (Name, Email, Password) VALUES (${name}, ${email}, ${password})`;
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`SELECT * FROM Users WHERE Email=${email} AND Password=${password}`;
    if (result.recordset.length > 0) res.json(result.recordset[0]);
    else res.status(401).send('Invalid credentials');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
