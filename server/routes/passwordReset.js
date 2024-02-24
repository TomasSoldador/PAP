const express = require('express');
const router = express.Router();
const db = require('../db/db');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { SelectUserWithEmail } = require("../db/queries");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'carconnect71@gmail.com',
    pass: 'wkqj ejxq irpx nyrk'
  }
});

const sendPasswordResetEmail = (email, token) => {
  const mailOptions = {
    from: 'carconnect71@gmail.com',
    to: email,
    subject: 'Recuperação de senha',
    html: `
      <p>Olá,</p>
      <p>Clique no botão abaixo para recuperar sua senha:</p>
      <a href="http://localhost:5173/resetpass?token=${token}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none;">Recuperar Senha</a>
      <p>Ou copie e cole o seguinte link em seu navegador: <a href="http://localhost:5173/resetpass?token=${token}">http://localhost:5173/resetpass?token=${token}</a></p>
      <p>Se você não solicitou a recuperação de senha, ignore este e-mail.</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("E-mail de recuperação de senha enviado com sucesso.");
    }
  });
};

router.post('/post', async (req, res) => {
  try {
    const email = req.body.email;

    db.query(SelectUserWithEmail, [email], async (err, result) => {
      if (err) {
        console.error("Erro na consulta SQL (routes/passwordReset.js):", err);
        return res.status(500).json({ error: 'Erro Interno do Servidor' });
      }

      if (result.length > 0) {
        const token = jwt.sign({ id: result[0].id }, 'palavra_secreta', { expiresIn: '7d' });
        sendPasswordResetEmail(email, token);
        return res.json({ success: true, emailError: true });
      } else {
        console.log("Email não encontrado");
        res.json({ emailError: false });
      }
    });
  } catch (error) {
    console.error('Erro no endpoint /post (routes/passwordReset.js):', error);
    res.status(500).json({ error: 'Erro Interno do Servidor' });
  }
});

module.exports = router;
