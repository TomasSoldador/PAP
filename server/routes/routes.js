const express = require('express');
const registarRoutes = require('./registar');
const loginRoutes = require('./login');
const PasswordReset = require('./passwordReset');
const PassReset = require('./passReset');
const Home = require('./home');
const Explorer = require('./explorer');
const User = require('./User');
const Posts = require('./posts');
const Loja = require('./loja');
const Definicoes = require('./definicoes');
const router = express.Router();

router.use('/registar', registarRoutes);
router.use('/login', loginRoutes);
router.use('/PasswordReset', PasswordReset);
router.use('/passReset', PassReset);
router.use('/home', Home);
router.use('/explorer', Explorer);
router.use('/user', User);
router.use('/posts', Posts);
router.use('/loja', Loja);
router.use('/definicoes', Definicoes);


module.exports = router;