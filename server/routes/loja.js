const express = require('express');
const db = require('../db/db');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const validateToken = require('../middleware/validateToken');
const { SelectALLPostsLoja, SelectAllPerfilWithId } = require("../db/queries");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = './images/imagesPostsLoja';
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
  console.error('Erro ao inserir dados no banco de dados (routes/loja.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post('/insert', validateToken, upload.array('images', 4), async (req, res) => {
  try {
    const images = req.files.map(file => file.filename);
    const nome = req.body.nome;
    const descricao = req.body.description;
    const numeroTelefone = req.body.phoneNumber;
    const preco = req.body.preco;
    const localizacao = req.body.location;
    const perfil_id = req.decoded.id;

    await db.query('INSERT INTO postsloja (nome, numero, localizacao, preco, descricao, perfil_id, foto1, foto2, foto3, foto4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, numeroTelefone, localizacao, preco, descricao, perfil_id, images[0], images[1], images[2], images[3]]);

    res.status(200).json({ success: true, message: 'Imagens e descrição enviadas com sucesso' });
  } catch (error) {
    handleInsertPostError(res, error);
  }
});

const handleGetPostsError = (res, error) => {
  console.error('Erro ao recuperar posts do banco de dados (routes/loja.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.get('/get', async (req, res) => {
  try {
    db.query(SelectALLPostsLoja + ' ORDER BY id DESC', async (err, result) => {
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
  console.error('Erro ao recuperar dados de perfil do banco de dados (routes/loja.js):', error);
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

module.exports = router;
