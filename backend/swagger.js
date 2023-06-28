const swaggerJsDoc = require('swagger-jsdoc');

// Swagger JSDoc configuration options
const options = {
  swaggerDefinition: {
    openapi: "3.1.0",
    info: {
      title: 'Chloe+Nathan Blog API',
      version: '1.0.0',
      description: 'API Blog documentation using Swagger',
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Nathan Budiman",
        url: "https://www.linkedin.com/in/jonathan-budiman-3a75201b8/",
        email: "jbudiman@purdue.edu",
      }
    },
    basePath: 'http://localhost:8000',
  },
  apis: ['./routes/*.ts'], // Specify the path to your route files
};

const specs = swaggerJsDoc(options);

module.exports = specs;