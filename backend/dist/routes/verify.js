"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
//Controllers
const verifyController = require('../controllers/verifyController');
router.post('/login', verifyController.login);
router.post('/refresh', verifyController.refresh);
module.exports = router;
