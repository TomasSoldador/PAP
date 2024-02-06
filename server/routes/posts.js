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
    const dest = './imagesPosts';
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
    const description = req.body.description;



    const perfil_id = req.decoded.id; // Replace with actual perfil_id

    // Inserir dados na tabela posts
    const result = await db.query('INSERT INTO posts (perfil_id, foto1, foto2, foto3, foto4, descricao) VALUES (?, ?, ?, ?, ?, ?)',
      [perfil_id, images[0], images[1], images[2], images[3], description]);

    console.log(result);

    res.status(200).json({ success: true, message: 'Images and description uploaded successfully' });
  } catch (error) {
    console.error('Error inserting data into the database:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


module.exports = router;
