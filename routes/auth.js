const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../dbconfig');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await sql.connect(dbConfig);
    await sql.query`
      INSERT INTO Users (Name, Email, Password)
      VALUES (${name}, ${email}, ${password})
    `;
    res.status(200).send('User registered successfully');
  } catch (err) {
    console.error('REGISTER ERROR:', err.message);
    res.status(500).send('Error registering user: ' + err.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`
      SELECT * FROM Users WHERE Email=${email} AND Password=${password}
    `;
    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error('LOGIN ERROR:', err.message);
    res.status(500).send('Error logging in: ' + err.message);
  }
});

module.exports = router;
