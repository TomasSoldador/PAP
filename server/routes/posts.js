const express = require('express');
const db = require('../db/db');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const validateToken = require('../middleware/validateToken');
const { SelectAllPosts, SelectAllPerfilWithId } = require("../db/queries");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = './images/imagesPosts';
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const handleInsertPostError = (res, error) => {
  console.error('Erro ao inserir dados no banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post('/insert', validateToken, upload.array('images', 4), async (req, res) => {
  try {
    const images = req.files.map(file => file.filename);
    const descricao = req.body.descricao;

    const perfil_id = req.decoded.id;

    // Inserir dados na tabela posts
    await db.query('INSERT INTO posts (perfil_id, foto1, foto2, foto3, foto4, descricao) VALUES (?, ?, ?, ?, ?, ?)',
      [perfil_id, images[0], images[1], images[2], images[3], descricao]);

    res.status(200).json({ success: true, message: 'Imagens e descrição enviadas com sucesso' });
  } catch (error) {
    handleInsertPostError(res, error);
  }
});

const handleGetPostsError = (res, error) => {
  console.error('Erro ao recuperar posts do banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.get('/get', async (req, res) => {
  try {
    db.query(SelectAllPosts, async (err, result) => {
      if (err) {
        handleGetPostsError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleGetPostsError(res, error);
  }
});

const handleGetPerfilError = (res, error) => {
  console.error('Erro ao recuperar dados de perfil do banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post('/getPerfil', async (req, res) => {
  try {
    const { idperfil } = req.body;

    db.query(SelectAllPerfilWithId, [idperfil], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleGetPerfilError(res, error);
  }
});

router.post('/likePost', async (req, res) => {
  const { postId, buttonStatus } = req.body;

  // Implemente a lógica para manipular os likes nos posts aqui
});

module.exports = router;
