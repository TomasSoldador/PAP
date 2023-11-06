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
            res.json({ password: false });
         }
   } else {
      console.log("usuario não encontrado")
   }})
})


module.exports = router;