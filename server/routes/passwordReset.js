const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');



router.post('/post', async (req, res) => {
  const email = req.body.email;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carconnect71@gmail.com',
      pass: 'wkqj ejxq irpx nyrk'
    }
  });
  
  const mailOptions = {
    from: 'carconnect71@gmail.com',
    to: email,
    subject: 'Recuperação de senha',
    html: `
        <p>Olá,</p>
        <p>Clique no botão abaixo para recuperar sua senha:</p>
        <a href="http://localhost:5173/resetpass" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none;">Recuperar Senha</a>
        <p>Ou copie e cole o seguinte link em seu navegador: <a href="http://localhost:5173/resetpass">http://localhost:5173/resetpass</a></p>
        <p>Se você não solicitou a recuperação de senha, ignore este e-mail.</p>
    `
  };

  console.log(email);

  const sqlSelect = "SELECT * FROM usuario WHERE email = ?";
  db.query(sqlSelect, [email], async (err, result) => {
    if (result.length > 0) {
      console.log(result)
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.error(error);
          } else {
          console.log('E-mail enviado: ' + info.response);
          console.log(result[0].id)
          const token = jwt.sign({ id: result[0].id}, 'palavra_secreta', { expiresIn: '7d' });
          return res.json({ success: true, token, emailError: true });
        }
      });
    } else {
      console.log("Email não encontrado");
      res.json({ emailError: false });
    }
  })
})

module.exports = router;