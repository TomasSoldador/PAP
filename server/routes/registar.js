const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');
const validateToken = require('../middleware/validateToken');

const storage = multer.diskStorage({
  destination: "./imagens",
  filename: function (_req, file, cb) {
    cb(
      null, file.fieldname + " - " + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
})

router.post("/insert", validateToken, upload.single("foto"), async (req, res) => {

  const userId = req.decoded.id;
  const username = req.body.username;
  const genero = req.body.genero;
  const data_nascimento = req.body.data_nascimento;
  const descricao = req.body.descricao;
  let foto = req.file ? req.file.filename : null;

  const sqlSelect = "SELECT * FROM perfil WHERE username = ?";
  db.query(sqlSelect, [username], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      console.log("Usuario ja existe")
      return res.json({ Usuario: true })
    } else {
      const sqlInsert = "INSERT INTO perfil (username, imageURL, genero, descricao, data_nascimento, Usuario_id) VALUES (?, ?, ?, ?, ?, ?)";
      db.query(sqlInsert, [username, foto, genero, descricao, data_nascimento, userId], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Perfil adicionado com sucesso")
          return res.json({ success: true })
        }
      })
    }
  })
})


module.exports = router;