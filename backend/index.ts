const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger');
var cors = require('cors')

dotenv.config();

const app = express();
app.use(cors())
const port = process.env.PORT;

const articlesNRouter = require('./routes/articles');

app.use('/articles', articlesNRouter);

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