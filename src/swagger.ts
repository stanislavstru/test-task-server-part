import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks API',
      version: '1.0.0',
      description: 'A simple Express.js API for tasks',
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync(
  './swagger.json',
  JSON.stringify(swaggerSpec, null, 2),
  'utf-8',
);
