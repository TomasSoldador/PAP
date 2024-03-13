const express = require('express');
const db = require('../db/db');
const router = express.Router();
const { QueryExplorer } = require("../db/queries");

router.post('/post', async (req, res) => {
  try {
    const { query } = req.body;
    db.query(QueryExplorer, [`%${query}%`], (error, resultsUser) => {
      if (error) {
        console.error('Erro no SQLquery (Erro no routes/Explorar.js) :', error);
        return res.status(500).send('Internal Server Error');
      } else {
        // Verificar se há resultados de usuário
        if (resultsUser && resultsUser.length > 0) {
          db.query(`SELECT * FROM posts WHERE perfil_id = ?`, [resultsUser[0].id], (error, resultsPost) => {
            if (error) {
              console.error('Erro ao buscar posts do usuário:', error);
              return res.status(500).send('Internal Server Error');
            }
            const results = {
              resultsUser: resultsUser,
              resultsPost: resultsPost
            }
            res.json(results);
          });
        } else {
          // Se não houver resultados de usuário, apenas retornar os resultados do usuário vazio
          const results = {
            resultsUser: [],
            resultsPost: []
          }
          res.json(results);
        }
      }
    });
  } catch (error) {
    console.error('Erro no routes/Explorar.js', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
