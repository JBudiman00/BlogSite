const express = require('express');
const router = express.Router();

export {};
//Controllers
const verifyController = require('../controllers/verifyController')

router.post('/login', verifyController.login);
router.post('/refresh', verifyController.refresh)

module.exports = router;