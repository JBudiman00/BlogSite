const express = require('express');
const router = express.Router();

export {};
//Controllers
const verifyController = require('../controllers/verifyController')

router.post('/', verifyController.verify);

module.exports = router;