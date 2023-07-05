const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport');

export {};
//Controllers
const verifyController = require('../controllers/verifyController')

router.post('/login', verifyController.login);
router.post('/refresh', verifyController.refresh)
router.post('/verify', passport.authenticate('jwt', {session: false}), verifyController.verify)

module.exports = router;