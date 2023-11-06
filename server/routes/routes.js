const express = require('express');
const registarRoutes = require('./registar');
const loginRoutes = require('./login')

const router = express.Router();

router.use('/registar', registarRoutes);
router.use('/login', loginRoutes);

module.exports = router;