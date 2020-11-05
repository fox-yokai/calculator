const express = require('express');
const calculcationController = require('../controllers/calculcationController');
const router = express.Router();

router.route('/')
.get(calculcationController.lastTen)

module.exports = router;