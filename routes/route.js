const express = require('express');

let router = express.Router();

const userRoutes = require('./user.route');

router.use('/user', userRoutes);

module.exports = router;