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

    if (!id) {
      return res.status(400).send('ID do post não fornecido');
    }

    db.query('DELETE FROM comentarios WHERE posts_id = ?', [id], (err, resultComentarios) => {
      if (err) {
        console.error("Erro ao excluir comentários (routes/User.js): ", err);
        return res.status(500).send('Erro no servidor');
      }

      db.query('DELETE FROM posts WHERE id = ?', [id], (error, resultPosts) => {
        if (error) {
          console.error("Erro ao excluir post (routes/User.js): ", error);
          return res.status(500).send('Erro no servidor');
        }

        if (resultPosts.affectedRows > 0) {
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
          });
        } else {
          res.status(404).send('Post não encontrado');
        }
      });
    });
  } catch (error) {
    console.error("Erro ao processar solicitação de exclusão de post (routes/User.js): ", error);
    res.status(500).send('Erro no servidor');
  }
});


router.post('/follows', async (req, res) => {
  try {
    const { followerId, userId } = req.body;
    db.query("INSERT INTO seguidores (id_user, perfil_id) VALUES (?, ?)",
    [followerId, userId], (error, result) => {
      if (error) {
        console.log(error);
      }
      res.json(result)
    })
  } catch (error) {
    console.log(error);
  }
})

router.post('/getfollows', async (req, res) => {
  try {
    const { userId, userDataId } = req.body;
    db.query("SELECT * FROM seguidores WHERE perfil_id = ?", [userId], (error, result) => {
      if (error) {
        console.error("Erro ao executar a consulta:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
      } else {
        const idUsers = result.map(row => row.id_user);
        console.log("id: ", idUsers);
        
        if (idUsers.includes(userDataId.id)) {
          res.json(true);
        } else {
          res.json(false);
        }
      }
    });

  } catch (err) {
    console.error("Erro ao executar a consulta:", err);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

router.post("/getAllFollows", async (req, res) => {
  try {
    const { userDataid } = req.body;
    db.query("SELECT * FROM seguidores WHERE perfil_id = ?", [userDataid], (error, results) => {
      if(error) {
        console.log(error)
      } else {
        res.json(results);
      }
    })
  } catch (err) {

  }
})

router.delete("/deletefollow", async (req, res) => {
  try {
    const  { userId, followerId } = req.body;
    db.query("DELETE FROM seguidores WHERE id_user = ? AND perfil_id = ?", [followerId, userId], (error, result) => {
      if (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." });
      } else {
        console.log("eliminado")
        res.status(200).json({ message: "Seguidor removido com sucesso." });
      }
    });
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

router.post("/getDataFollow", async (req, res) => {
  try {
    const { userId } = req.body;
    db.query("SELECT username, imageUrl FROM perfil WHERE id = ?", [userId], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
      } else {
        console.log(result) // Retorna os nomes de usuário como um array
      }
    });
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

module.exports = router;
