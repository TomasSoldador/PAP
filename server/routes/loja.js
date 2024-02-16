const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const validateToken = require('../middleware/validateToken');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = './imagesPostsLoja';
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

router.post('/insert', validateToken, upload.array('images', 4), async (req, res) => {
  try {
    const images = req.files.map(file => file.filename);
    const nome = req.body.nome;
    const description = req.body.description;
    const phoneNumber = req.body.phoneNumber;
    const preco = req.body.preco;
    const location = req.body.location;
    const perfil_id = req.decoded.id; // Replace with actual perfil_id

    console.log(images, description, phoneNumber, preco, location, perfil_id)

    const result = await db.query('INSERT INTO postsloja (nome, numero, localizacao, preco, descricao, perfil_id, foto1, foto2, foto3, foto4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, phoneNumber, location, preco, description, perfil_id, images[0], images[1], images[2], images[3]]);
    console.log(result);

    res.status(200).json({ success: true, message: 'Images and description uploaded successfully' });
  } catch (error) {
    console.error('Error inserting data into the database:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/get', async (req, res) => {
  
    sqlSelect = 'SELECT * FROM postsloja';
    db.query(sqlSelect, async (err, result) => {
      res.json(result);
    })
});

router.post('/getPerfil', async (req, res) => {
  const { idperfil } = req.body;
  console.log(idperfil)
  const sqlQuery = `
    SELECT * FROM perfil
    WHERE id = ?
    LIMIT 1;
  `;
  db.query(sqlQuery, [idperfil], async (err, result) => {
    res.json(result);
  })
});






module.exports = router;
