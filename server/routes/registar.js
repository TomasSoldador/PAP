const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../db');


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

router.post("/insert", upload.single("foto"), async (req, res) => {

  const username = req.body.username;
  const genero = req.body.genero;
  const data_nascimento = req.body.data_nascimento;
  const descricao = req.body.descricao;
  const foto = req.file.filename;

  const sqlSelect = "SELECT * FROM perfil WHERE username = ?";
  db.query(sqlSelect, [username], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      console.log("Usuario ja existe")
      return res.json({ Usuario: "UsuarioExiste" })
    } else {
      const sqlInsert = "INSERT INTO perfil (username, imageURL, genero, descricao, data_nascimento, Usuario_id) VALUES (?, ?, ?, ?, ?, ?)";
      db.query(sqlInsert, [username, foto, genero, descricao, data_nascimento, "4"], (err, result) => {
        if (err) {
          console.log(err);
        }
      })
    }
  })
})


module.exports = router;