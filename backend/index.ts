const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger');
var cors = require('cors')
const cookieParser = require('cookie-parser');
// const passport = require('passport');
// require('./passport');
dotenv.config();

const app = express();
app.use(cors({
    origin: "https://chloe-nathan-blog-site.vercel.app/", 
    credentials: true, 
}));
app.use(cookieParser());
const port = process.env.PORT;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const articlesRouter = require('./routes/articles');
const verifyRouter = require('./routes/verify');

app.use('/articles', articlesRouter);
app.use('/auth', verifyRouter);

app.get('/', (req: Request, res: any) => {
  res.send('Nathan\'s API');
});

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});