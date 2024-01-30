const express = require('express');
const registarRoutes = require('./registar');
const loginRoutes = require('./login');
const PasswordReset = require('./passwordReset');
const PassReset = require('./passReset');
const Home = require('./home');
const Explorer = require('./explorer')
const User = require('./User')
const router = express.Router();

router.use('/registar', registarRoutes);
router.use('/login', loginRoutes);
router.use('/PasswordReset', PasswordReset);
router.use('/passReset', PassReset);
router.use('/home', Home);
router.use('/explorer', Explorer);
router.use('/user', User)

module.exports = router;