const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger');
var cors = require('cors')
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
app.use(cors({
    origin: ["https://chloe-nathan-blog-site.vercel.app", "http://localhost:3000"], 
    credentials: true, 
}));
app.use(cookieParser());
const port = process.env.PORT;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const articlesRouter = require('./routes/articles');
const verifyRouter = require('./routes/verify');
const photosRouter = require('./routes/photos');

app.use('/articles', articlesRouter);
app.use('/auth', verifyRouter);
app.use('/photos', photosRouter);

app.get('/', (req: Request, res: any) => {
  res.send('Chloe+Nathan Blog API');
});

app.use(
  '/api-docs',
  swaggerUi.serve, 
  // swaggerUi.setup(swaggerDocument),
  swaggerUi.setup(swaggerDocument, { customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css" })
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;