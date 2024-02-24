const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db/db');
const router = express.Router();
const validateToken = require('../middleware/validateToken');
const { UpdatePasswordWithId } = require("../db/queries");

const handleUpdatePasswordError = (res, error) => {
  console.error('Erro ao atualizar a senha (routes/passReset):', error);
  res.status(500).json({ error: 'Erro Interno do Servidor' });
};

router.post('/insert', validateToken, async (req, res) => {
  try {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const userId = req.decoded.id;

    if (password === confirmPassword) {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(UpdatePasswordWithId, [hashedPassword, userId], (err, result) => {
        if (err) {
          handleUpdatePasswordError(res, err);
        } else {
          res.json({ success: true });
        }
      });
    } else {
      res.json({ ErrorSenhas: true });
    }
  } catch (error) {
    handleUpdatePasswordError(res, error);
  }
});

module.exports = router;
