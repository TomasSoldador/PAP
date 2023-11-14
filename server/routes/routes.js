const express = require('express');
const registarRoutes = require('./registar');
const loginRoutes = require('./login');
const PasswordReset = require('./passwordReset');

const router = express.Router();

router.use('/registar', registarRoutes);
router.use('/login', loginRoutes);
router.use('/PasswordReset', PasswordReset);

module.exports = router;