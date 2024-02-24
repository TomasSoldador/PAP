const express = require('express');
const db = require('../db/db');
const router = express.Router();
const { SelectAllPerfilUserId } = require("../db/queries");

router.post('/post', async (req, res) => {
  try {
    const userId = req.body.userId;
    db.query(SelectAllPerfilUserId, [userId], (err, result) => {
      if (err) {
        console.error('Erro no SQL query (Erro no routes/home.js):', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.error('Erro no Erro no routes/home.js:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
