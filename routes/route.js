const express = require('express');

let router = express.Router();

const userRoutes = require('./user.route');
const taskRoutes = require('./task.route');

router.use('/user', userRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;