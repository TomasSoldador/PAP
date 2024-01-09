const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();
const validateToken = require('../middleware/validateToken');


router.post('/insert', validateToken, async (req, res) => { 
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const userId = req.decoded.id;

  if (password === confirmPassword) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlUpdate = "UPDATE usuario SET password = ? WHERE id = ?";
    db.query(sqlUpdate, [hashedPassword, userId], (err, result) => {
      if (err) {
        console.log("Erro ao atualizar a senha:", err);
        return res.status(500).json({ error: 'Erro Interno do Servidor' });
      }
      console.log("Senha atualizada com sucesso.");
      return res.json({ success: true });
    });
  } else {
    return res.json({ ErrorSenhas: true });
  }
})


module.exports = router;
