const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const validateToken = require('../middleware/validateToken');


router.post('/insert', validateToken, async (req, res) => { 
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const userId = req.decoded.id;

  //TODO: Ja esta a receber todos os dados deste lado.
  // ! Agora so tenho verificar as 2 senhas e se forem iguais tenho de encryptar a senha e atraves do id mudar essa senha.
  console.log(userId);
  console.log(password);
  console.log(confirmPassword);

  return res.json({ ErrorSenhas: true });

})


module.exports = router;
