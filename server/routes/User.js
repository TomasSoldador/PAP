const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');
const validateToken = require('../middleware/validateToken');

router.post('/profile', async (req, res) => {
  const { username } = req.body;
  const sqlQuery = `
    SELECT * FROM perfil
    WHERE username = ?
    LIMIT 1;
  `;

  db.query(sqlQuery, [username], (error, results) => {
    if (error) {
      console.error("Erro ao buscar perfil: ", error);
      return res.status(500).send('Erro no servidor');
    }
    // Considerando que o username é único, deve haver apenas um resultado
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Perfil não encontrado');
    }
  });
});

router.post('/profilePosts', async (req, res) => {
  const { userId } = req.body;

  const sqlQuery = `
    SELECT * FROM posts
    WHERE perfil_id = ?
  `;

  db.query(sqlQuery, [userId], (err, result) => {
    res.json(result);
  })
})

router.post('/profilePostsLoja', async (req, res) => {
  const { userId } = req.body;

  const sqlQuery = `
    SELECT * FROM postsloja
    WHERE perfil_id = ?
  `;

  db.query(sqlQuery, [userId], (err, result) => {
    res.json(result);
  })
})


module.exports = router;