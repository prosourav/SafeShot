const OpenApiValidator = require('express-openapi-validator');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const logger = require("morgan");
const swaggerDocument = YAML.load('./swagger.yaml');
const express = require('express');


const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(logger("dev"));
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.use(
    OpenApiValidator.middleware({
      apiSpec: './swagger.yaml',
    }),
  );
};

module.exports = {
  applyMiddleware
};