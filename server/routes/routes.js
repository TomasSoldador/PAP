const express = require('express');
const registarRoutes = require('./registar');
const loginRoutes = require('./login');
const PasswordReset = require('./passwordReset');
const PassReset = require('./passReset');
const Home = require('./home');

const router = express.Router();

router.use('/registar', registarRoutes);
router.use('/login', loginRoutes);
router.use('/PasswordReset', PasswordReset);
router.use('/passReset', PassReset);
router.use('/home', Home);

module.exports = router;