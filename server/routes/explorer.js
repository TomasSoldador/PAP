const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/post', async (req, res) => {
  const { query } = req.body;
  const sqlQuery = `
    SELECT * FROM perfil
    WHERE username LIKE ? OR descricao LIKE ?
    LIMIT 10;
  `;

  db.query(sqlQuery, [`%${query}%`, `%${query}%`], (error, results) => {
    if (error) return res.status(500).send('Erro no servidor');
    res.json(results);
  });

})


module.exports = router;
