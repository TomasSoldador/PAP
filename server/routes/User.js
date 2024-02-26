const express = require('express');
const router = express.Router();
const db = require('../db/db');
const {
  SelectAllPerfilWithUsernameLimit1,
  SelectAllPostsWithId,
  SelectAllPostsLojaWithId
} = require("../db/queries");

const handleProfileError = (res, error) => {
  console.error("Erro ao buscar perfil (routes/User.js): ", error);
  res.status(500).send('Erro no servidor');
};

router.post('/profile', async (req, res) => {
  try {
    const { username } = req.body;

    db.query(SelectAllPerfilWithUsernameLimit1, [username], (error, results) => {
      if (error) {
        handleProfileError(res, error);
      }
      // Considerando que o username é único, deve haver apenas um resultado
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send('Perfil não encontrado');
      }
    });
  } catch (error) {
    handleProfileError(res, error);
  }
});

const handleProfilePostsError = (res, error) => {
  console.error("Erro ao buscar posts do perfil (routes/User.js): ", error);
  res.status(500).send('Erro no servidor');
};

router.post('/profilePosts', async (req, res) => {
  try {
    const { userId } = req.body;

    db.query(SelectAllPostsWithId + ' ORDER BY id DESC', [userId], (error, result) => {
      if (error) {
        handleProfilePostsError(res, error);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleProfilePostsError(res, error);
  }
});

const handleProfilePostsLojaError = (res, error) => {
  console.error("Erro ao buscar posts de loja do perfil (routes/User.js): ", error);
  res.status(500).send('Erro no servidor');
};

router.post('/profilePostsLoja', async (req, res) => {
  try {
    const { userId } = req.body;

    db.query(SelectAllPostsLojaWithId + ' ORDER BY id DESC', [userId], (error, result) => {
      if (error) {
        handleProfilePostsLojaError(res, error);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleProfilePostsLojaError(res, error);
  }
});

module.exports = router;
