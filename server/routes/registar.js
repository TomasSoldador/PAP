const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db/db');
const validateToken = require('../middleware/validateToken');
const { SelectAllPerfilWithUsername } = require("../db/queries");

const storage = multer.diskStorage({
  destination: "./images/imagensPerfil",
  filename: function (_req, file, cb) {
    cb(
      null, file.fieldname + " - " + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const handleInsertProfileError = (res, error) => {
  console.error('Erro ao inserir dados do perfil no banco de dados (routes/registar.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post("/insert", validateToken, upload.single("foto"), async (req, res) => {
  try {
    const userId = req.decoded.id;
    const username = req.body.username;
    const genero = req.body.genero;
    const data_nascimento = req.body.data_nascimento;
    const descricao = req.body.descricao;
    let foto = req.file ? req.file.filename : null;

    db.query(SelectAllPerfilWithUsername, [username], (err, result) => {
      if (err) {
        handleInsertProfileError(res, err);
      }
      if (result.length > 0) {
        console.log("Usuário já existe");
        return res.json({ Usuario: true });
      } else {
        db.query("INSERT INTO perfil (username, imageURL, genero, descricao, data_nascimento, Usuario_id) VALUES (?, ?, ?, ?, ?, ?)",
          [username, foto, genero, descricao, data_nascimento, userId], (err, result) => {
          if (err) {
            handleInsertProfileError(res, err);
          } else {
            console.log("Perfil adicionado com sucesso");
            return res.json({ success: true });
          }
        });
      }
    });
  } catch (error) {
    handleInsertProfileError(res, error);
  }
});

module.exports = router;
