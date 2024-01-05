const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

router.post('/insert', async (req, res) => { 
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  console.log(password);
  console.log(confirmPassword);
})


module.exports = router;
