const express = require('express');
const router = express.Router();
const db = require('../db/db');
const {
  SelectAllPerfilWithUsernameLimit1,
  SelectAllPostsWithId,
  SelectAllPostsLojaWithId
} = require("../db/queries");
const fs = require('fs');
const path = require('path');

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

router.delete('/profilePostLojaDelete', async (req, res) => {
  try {
    const { id, foto1, foto2, foto3, foto4 } = req.body;
    console.log(req.body)

    console.log('Corpo da requisição:', req.body);

    if (!id) {
      return res.status(400).send('ID do post não fornecido');
    }

    db.query('DELETE FROM postsloja WHERE id = ?', [id], (error, result) => {
      if (error) {
        console.error("Erro ao excluir post de loja (routes/User.js): ", error);
        res.status(500).send('Erro no servidor');
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Post de loja excluído com sucesso' });
          const filesToDelete = [foto1, foto2, foto3, foto4].filter(Boolean);
          const uploadDir = path.join(__dirname, '../images/imagesPostsLoja');

          filesToDelete.forEach((filename) => {
            const filePath = path.join(uploadDir, filename);
            fs.unlink(filePath, (unlinkError) => {
              if (unlinkError) {
                console.error(`Erro ao excluir arquivo ${filename}: `, unlinkError);
              }
            });
          })
        } else {
          res.status(404).send('Post de loja não encontrado');
        }
      }
    });
  } catch (error) {
    console.error("Erro ao processar solicitação de exclusão de post de loja (routes/User.js): ", error);
    res.status(500).send('Erro no servidor');
  }
});


router.delete('/profilePostDelete', async (req, res) => {
  try {
    const { id, foto1, foto2, foto3, foto4 } = req.body;
    console.log(req.body)

    console.log('Corpo da requisição:', req.body);

    if (!id) {
      return res.status(400).send('ID do post não fornecido');
    }

    db.query('DELETE FROM posts WHERE id = ?', [id], (error, result) => {
      if (error) {
        console.error("Erro ao excluir post (routes/User.js): ", error);
        res.status(500).send('Erro no servidor');
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Post excluído com sucesso' });
          const filesToDelete = [foto1, foto2, foto3, foto4].filter(Boolean);
          const uploadDir = path.join(__dirname, '../images/imagesPosts');

          filesToDelete.forEach((filename) => {
            const filePath = path.join(uploadDir, filename);
            fs.unlink(filePath, (unlinkError) => {
              if (unlinkError) {
                console.error(`Erro ao excluir arquivo ${filename}: `, unlinkError);
              }
            });
          })
        } else {
          res.status(404).send('Post não encontrado');
        }
      }
    });
  } catch (error) {
    console.error("Erro ao processar solicitação de exclusão de post (routes/User.js): ", error);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
