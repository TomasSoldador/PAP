const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');


const router = express.Router();

router.post('/post', async  (req, res) => {

   const email = req.body.email;
   const password = req.body.password;

   console.log(email);
   console.log(password);

   const sqlSelect = "SELECT * FROM usuario WHERE email = ?";
   db.query(sqlSelect, [email], async (err, result) => {
      if(err) {
         console.error('Erro ao buscar usuário:', err.message);
      }
   
      if (result.length > 0) {
         const crypt_Password = result[0].password;
         const passwordMatch = await bcrypt.compare(password, crypt_Password);

         if (passwordMatch) {
            console.log('seja bem vindo')
            res.json({ password: true });
         } else {
            console.log('seja bem false')
            res.json({ password: false });
         }
   } else {
      console.log("usuario não encontrado")
   }})
})

router.post('/insert', async (req, res) => {

   const nome = req.body.nome;
   const email = req.body.email;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;


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
            const sqlInsert = "INSERT INTO usuario (nome, email, password) VALUES (?, ?, ?)";
            db.query(sqlInsert, [nome, email, crypto_Password], (err, result) => {
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