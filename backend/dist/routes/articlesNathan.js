"use strict";
const e = require('express');
const router = e.Router();
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve all users
 *     description: Get a list of all registered users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 */
router.get('/test', (req, res) => {
    res.send('Nathan\'s other API endpoint');
});
module.exports = router;
