const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../passport');

export {};
//Controllers
const verifyController = require('../controllers/verifyController')

/**
 * @swagger
 * tags:
 *   - name: Auth
 *   - description: Operations related to admin authentication
*/

/**
 * @swagger
 * paths:
 *   /auth/login:
 *     get:
 *       summary: Log user into system and return access token + refresh token
 *       tags: 
 *         - Auth
 *       parameters:
 *         - in: path
 *           name: username
 *           schema:
 *             type: string
 *           required: true
 *           description: Admin input username
 *         - in: path
 *           name: password
 *           schema:
 *             type: string
 *           required: true
 *           description: Admin input password
 *       responses:
 *         201:
 *           description: OK
 *         401:
 *           description: Unable to authenticate
 */
router.post('/login', verifyController.login);

/**
 * @swagger
 * paths:
 *   /auth/refresh:
 *     get:
 *       summary: Use refresh token and return new access key
 *       tags: 
 *         - Auth
 *       responses:
 *         200:
 *           description: OK
 *         401:
 *           description: Unable to authenticate
 */
router.post('/refresh', verifyController.refresh)

/**
 * @swagger
 * paths:
 *   /auth/verify:
 *     get:
 *       summary: Use refresh token and return new access key
 *       tags: 
 *         - Auth
 *       responses:
 *         200:
 *           description: OK
 *         401:
 *           description: Unable to authenticate
 */
router.post('/verify', passport.authenticate('jwt', {session: false}), verifyController.verify)

module.exports = router;