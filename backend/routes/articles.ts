const e = require('express');
const router = e.Router();
const passport = require('passport');
require('../passport');
export {}

//Controllers
const articlesController = require('../controllers/articlesController')

//Schemas
/**
 * @swagger
 * tags:
 *   - name: Articles
 *   - description: Operations related to articles
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
 *     PostArticle:
 *       type: object
 *       required:
 *         - type
 *         - category
 *         - title
 *         - summmary
 *       properties:
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
 *       example:
 *         type: Nathan
 *         category: life
 *         title: Daily Life
 *         summary: A POV into Nathan's Daily Life
 *         content: Fill in article content here
 */

/**
 * @swagger
 * paths:
 *   /articles:
 *     get:
 *       summary: Get all article information
 *       tags: 
 *         - Articles
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   oneOf:
 *                     - $ref: '#/components/schemas/Articles'
 */
router.get('/', articlesController.getArticles);

/**
 * @swagger
 * paths:
 *   /articles/:id:
 *     get:
 *       summary: Get article information by id
 *       tags: 
 *         - Articles
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
 *       summary: Post article information to database
 *       tags: 
 *         - Articles
 *       requestBody:
 *         description: Required components of creating an Article
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostArticle'
 *       responses:
 *         201:
 *           description: Article successfully added
 */
router.post('/', passport.authenticate('jwt', {session: false}), articlesController.postArticles);

/**
 * @swagger
 * paths:
 *   /articles/:id:
 *     patch:
 *       summary: Update article information in database 
 *       tags: 
 *         - Articles   
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Unique numerical ID of blog article           
 *       responses:
 *         204:
 *           description: Article successfully updated
 *         400:
 *           description: Request has bad syntax or inherently impossible to be satisfied
 *           example:
 */
router.patch('/:id', passport.authenticate('jwt', {session: false}), articlesController.updateArticles)

/**
 * @swagger
 * paths:
 *   /articles/fav/:id:
 *     patch:
 *       summary: Update highlighted article   
 *       tags: 
 *         - Articles
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: integer
 *           required: true
 *           description: Unique numerical ID of blog article           
 *       responses:
 *         204:
 *           description: Article successfully highlighted
 *         400:
 *           description: Request has bad syntax or inherently impossible to be satisfied
 *           example:
 */
router.patch('/fav/:id', passport.authenticate('jwt', {session: false}), articlesController.favArticle)

/**
 * @swagger
 * paths:
 *   /articles/:id:
 *     delete:
 *       summary: Delete article information in database by ID
 *       tags: 
 *         - Articles
 *       responses:
 *         204:
 *           description: Article successfully highlighted
 *         400:
 *           description: Request has bad syntax or inherently impossible to be satisfied
 *           example:
 */
router.delete('/:id', passport.authenticate('jwt', {session: false}), articlesController.deleteArticles)

module.exports = router;