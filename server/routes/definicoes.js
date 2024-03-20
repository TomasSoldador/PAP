const express = require('express');
const db = require('../db/db');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const validateToken = require('../middleware/validateToken');
const fs = require('fs');

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

router.post('/getUsuario', async (req, res) => {
  try {
    const usuarioId = req.body.usuarioId
    db.query("SELECT * FROM usuario WHERE id = ?", [usuarioId], (error, result) => {
      if(error) {
        console.error(error);
      } else {
        res.json(result);
      }
    })
  } catch (error) {
    handleProfileError(res, error);
  }
});

router.post('/uploadPhoto', validateToken, upload.single("foto"), async (req, res) => {
  try {
    const userId = req.body.userId;
    let foto = req.file ? req.file.filename : null;

    db.query("SELECT imageUrl FROM perfil WHERE id = ?", [userId], (erro, result) => {
      if(erro) {
        console.error(erro);
      } else {
        const imageUrl = result[0].imageUrl;
        if (imageUrl) {
          // Construa o caminho completo para o arquivo
          const filePath = path.join(__dirname, '../images/imagensPerfil', imageUrl);
          // Verifique se o arquivo existe
          if (fs.existsSync(filePath)) {
            // Exclua o arquivo
            fs.unlinkSync(filePath);
            console.log('Imagem excluída:', imageUrl);
            db.query("UPDATE perfil SET imageUrl = ? WHERE id = ?", [foto, userId], (err, resultDB) => {
              if(err){
                console.log(err);
                res.json("UpdateFotoError")
              } else {
                res.json("UpdateFotoSuccess")
              }
            })
          } else {
            console.log('Arquivo não encontrado:', imageUrl);
          }
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
})

router.post("/uploadDados", async (req, res) => {
  const { userId, username, descricao, gender } = req.body;
  try {
    db.query("UPDATE perfil SET username= ?, descricao= ?, genero= ? WHERE id= ?", [username, descricao, gender, userId], (erro, result) => {
      if(erro) {
        console.error(erro)
        res.json("UpdateDadosError")
      } else {
        res.json("UpdateDadosSuccess")
      }
    })  
  } catch (error) {
    console.error(error)
  }
  
})

module.exports = router;
