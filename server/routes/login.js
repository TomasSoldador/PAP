const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db/db');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SelectUserWithEmail } = require("../db/queries");

const handleServerError = (err, res) => {
   console.error('Erro no routes/login.js:', err.message);
   res.status(500).json({ error: 'Erro Interno do Servidor' });
};

const handleEmailExists = (res) => {
   console.log("Email já existe");
   res.json({ emailError: true });
};

const handlePasswordMismatch = (res) => {
   console.log("Senhas não coincidem");
   res.json({ ErrorSenhas: true });
};

const handleUserAddedSuccess = (res, result) => {
   console.log("Usuário adicionado com sucesso.");
   const token = jwt.sign({ id: result.insertId }, 'palavra_secreta', { expiresIn: '7d' });
   res.json({ success: true, token });
};

// Endpoint de login
router.post('/post', async (req, res) => {
   try {
      const email = req.body.email;
      const password = req.body.password;

      db.query(SelectUserWithEmail, [email], async (err, result) => {
         if (err) {
            handleServerError(err, res);
         } else if (result.length > 0) {
            const cryptPassword = result[0].password;
            const passwordMatch = await bcrypt.compare(password, cryptPassword);

            if (passwordMatch) {
               const token = jwt.sign({ id: result[0].id }, 'palavra_secreta', { expiresIn: '7d' });
               res.json({ token });
            } else {
               handlePasswordMismatch(res);
            }
         } else {
            res.json({ usuario: false });
         }
      });
   } catch (error) {
      console.error('Error no routes/login.js:', error);
      res.status(500).send('Internal Server Error');
   }
});

// Endpoint de registro
router.post('/insert', async (req, res) => {
   try {
      const nome = req.body.nome;
      const email = req.body.email;
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;

      db.query(SelectUserWithEmail, [email], async (err, result) => {
         if (err) {
            handleServerError(err, res);
         } else if (result.length > 0) {
            handleEmailExists(res);
         } else {
            if (password === confirmPassword) {
               const hashedPassword = await bcrypt.hash(password, 10);
               db.query("INSERT INTO usuario (nome, email, password) VALUES (?, ?, ?)", [nome, email, hashedPassword], (err, result) => {
                  if (err) {
                     console.log("Erro ao adicionar o usuário (routes/login.js):", err);
                     res.json({ success: false });
                  } else {
                     handleUserAddedSuccess(res, result);
                  }
               });
            } else {
               handlePasswordMismatch(res);
            }
         }
      });
   } catch (error) {
      console.error('Error no routes/login.js:', error);
      res.status(500).send('Internal Server Error');
   }
});

module.exports = router;
