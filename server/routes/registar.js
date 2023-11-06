const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();


router.post('/insert', async (req, res) => {

   const nome = req.body.nome;
   const email = req.body.email;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;
   const data_nascimento = req.body.data_nascimento;


   // Verificar o email:
   const sqlSelect = "SELECT * FROM usuario WHERE email = ?";
   db.query(sqlSelect, [email], async (err, result) => {
      if (err) {
         console.log("Erro ao verificar o email:", err);
         res.json({ error: "Erro ao verificar o email" });
         return;
      }

      if (result.length > 0) {
         console.log("Email já existe");
         res.json({ error: "Email já cadastrado" });
      } else {
         // Verifica se as senhas são iguais:
         if (password === confirmPassword) {
            const crypto_Password = await bcrypt.hash(password, 10);
            const sqlInsert = "INSERT INTO usuario (nome, email, password, data_nascimento) VALUES (?, ?, ?, ?)";
            db.query(sqlInsert, [nome, email, crypto_Password, data_nascimento], (err, result) => {
               if (err) {
                  console.log("Erro ao adicionar o usuário:", err);
                  res.json({ error: "Erro ao adicionar o usuário" });
                  return;
               }
               
               console.log("Usuário adicionado com sucesso.");
               res.json({ success: true });
            });
         } else {
            console.log("Erro ao adicionar o usuário: Senhas não coincidem");
            res.json({ error: "Senhas não coincidem" });
         }
      }
   })

   
});


module.exports = router;