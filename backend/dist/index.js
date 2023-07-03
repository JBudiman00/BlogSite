"use strict";
const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('../swagger');
var cors = require('cors');
const passport = require('passport');
require('./passport');
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const articlesRouter = require('./routes/articles');
const verifyRouter = require('./routes/verify');
app.use('/articles', passport.authenticate('jwt', { session: false }), articlesRouter);
// app.use('/articles', articlesRouter);
app.use('/login', verifyRouter);
app.get('/', (req, res) => {
    res.send('Nathan\'s API');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
