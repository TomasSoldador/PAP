const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');


// Endpoint de login
router.post('/post', async (req, res) => {
   // Recebe os dados do FrontEnd
   const email = req.body.email;
   const password = req.body.password;
   console.log("Email: " + email + " Password: " + password);


   // Faz a busca do usuario pelo email
   const sqlSelect = "SELECT * FROM usuario WHERE email = ?";
   db.query(sqlSelect, [email], async (err, result) => {

      // Se a busca der um erro entra neste if
      if (err) {
         console.error('Erro ao buscar usuário:', err.message);
         return res.status(500).json({ error: 'Erro Interno do Servidor' });
      }

      // Se o resultado funcionar ele vai pegar no email e na password da base de dados
      if (result.length > 0) {
         console.log("Usuário encontrado");
         console.log(result)

         // Vai pegar a password encryptada e comparar com a password inserida no login
         const cryptPassword = result[0].password;
         const passwordMatch = await bcrypt.compare(password, cryptPassword);

         if (passwordMatch) {
            // Se as passwords forem iguais vai passar um true para o FrontEnd
            console.log('Passwords conicidem');
            const token = jwt.sign({ id: result.id, email: result.email }, 'palavra_secreta', { expiresIn: '7d' });
            console.log("Token Gerado no Backend:", token);

            return res.json({ token });
         } else {
            // Se as passwords forem diferentes vai passar um false para o FrontEnd
            console.log('Passwords não conicidem');
         }

      } else {
         // Se o usuario não for encontrado vai passar um false para o FrontEnd
         console.log("Usuário não encontrado");
         return res.json({ usuario: false });
      }
   });
});




// Endpoint de registro
router.post('/insert', async (req, res) => {

   // Recebe os dados do FrontEnd
   const nome = req.body.nome;
   const email = req.body.email;
   const password = req.body.password;
   const confirmPassword = req.body.confirmPassword;

   // Verificar se o email já existe na base de dados
   const sqlSelect = "SELECT * FROM usuario WHERE email = ?";
   db.query(sqlSelect, [email], async (err, result) => {

      // Se a busca der um erro entra neste if
      if (err) {
         console.log("Erro ao verificar o email:", err);
         return res.status(500).json({ error: 'Erro Interno do Servidor' });
      }

      // Este if vai verificar se o email ja existe
      if (result.length > 0) {

         // Se o email ja existir vai passar um true para o FrontEnd
         console.log("Email já existe");
         return res.json({ emailError: true });

      // Se não existir o email entra neste else
      } else {
         // Este if vai verificar se a password e a confirmpassword são iguais
         if (password === confirmPassword) {

            // Se for iguais aqui vai encryptar a password
            const hashedPassword = await bcrypt.hash(password, 10);
         
            // Aqui vamos inserir os dados na base de dados
            const sqlInsert = "INSERT INTO usuario (nome, email, password) VALUES (?, ?, ?)";
            db.query(sqlInsert, [nome, email, hashedPassword], (err, result) => {

               // Se der algum erro no insert passa um success false para o FrontEnd
               if (err) {
                  console.log("Erro ao adicionar o usuário:", err);
                  return res.json({ success: false });
               }

               // Se der certo no insert passa um success true para o FrontEnd
               console.log("Usuário adicionado com sucesso.");
               const token = jwt.sign({ id: result.id}, 'palavra_secreta', { expiresIn: '7d' });
               console.log(token);
               return res.json({ success: true, token });
            });

         // Se as senhas não forem iguais vai passar um False para o FrontEnd
         } else {
            console.log("Senhas não coincidem");
            return res.json({ ErrorSenhas: true });
         }
      }
   });
});

module.exports = router;
