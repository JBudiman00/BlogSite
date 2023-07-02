"use strict";
const e = require('express');
const router = e.Router();
//Controllers
const articlesController = require('../controllers/articlesController');
/**
 * @swagger
 * paths:
 *   /articles:
 *     get:
 *       summmary: Get all article information
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Articles'
 * components:
 *   schemas:
 *     Articles:
 *       type: object
 *       required:
 *         - id
 *         - type
 *         - category
 *         - title
 *         - summmary
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated and auto-incremented article ID
 *         type:
 *           type: enum
 *           description: Article section (Nathan, Chloe, Chloe+Nathan)
 *         category:
 *           type: enum
 *           description: Article type (life, food, )
 *         title:
 *           type: string
 *           description: Title of article
 *         summary:
 *           type: string
 *           description: Short summary about article
 *         createdAt:
 *           type: datetime
 *           description: Time article was created and uploaded
 *         updatedAt:
 *           type: datetime
 *           description: Last time the article was updated
 *       example:
 *         id: 3
 *         type: Nathan
 *         category: life
 *         title: Daily Life
 *         summary: A POV into Nathan's Daily Life
 *         createdAt: 2023-06-26T10:53:15.000Z
 *         updatedAt: 2023-06-26T10:53:15.000Z
 *         content: Fill in article content here
 */
router.get('/', articlesController.getArticles);
/**
 * @swagger
 * paths:
 *   /articles/:id:
 *     get:
 *       summmary: Get article information by id
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Unique numerical ID of blog article
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Articles'
 */
router.get('/:id', articlesController.getBlog);
/**
 * @swagger
 * paths:
 *   /articles:
 *     post:
 *       summmary: Post article information to database
 *       requestBody:
 *         description: Required components of creating an Article
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Articles'
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *               example:
 *                 message: Article successfully added
 */
router.post('/', articlesController.postArticles);
/**
 * @swagger
 * paths:
 *   /articles:
 *     patch:
 *       summmary: Update article information in database
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Articles'
 */
router.patch('/:id', articlesController.updateArticles);
/**
 * @swagger
 * paths:
 *   /articles:
 *     delete:
 *       summmary: Delete article information in database by ID
 *       responses:
 *         200:
 *           description: Request handled successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *               example:
 *                 message: Article successfully delete
 */
router.delete('/:id', articlesController.deleteArticles);
module.exports = router;
