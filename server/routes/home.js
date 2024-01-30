const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/post', async (req, res) => {
  const userId = req.body.userId;

  console.log(userId);

  const sqlSelect = "SELECT * FROM perfil WHERE Usuario_id = ?";
  db.query(sqlSelect, [userId], async (err, result) => {
    if (err) {
      console.error("Erro na consulta SQL: ", err);
    } else {
      console.log(result);
      return res.json(result);
    }
  });

})


module.exports = router;
