const express = require('express');
const db = require('../db/db');
const router = express.Router();
const { QueryExplorer } = require("../db/queries");

router.post('/post', async (req, res) => {
  try {
    const { query } = req.body;
    db.query(QueryExplorer, [`%${query}%`], (error, results) => {
      if (error) {
        console.error('Erro no SQLquery (Erro no routes/Explorar.js) :', error);
        return res.status(500).send('Internal Server Error');
      }

      res.json(results);
    });
  } catch (error) {
    console.error('Erro no routes/Explorar.js', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
