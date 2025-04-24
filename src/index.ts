import express from 'express';
import appController from './app.controller';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FakeStoreCart API',
      version: '1.0.0',
      description: 'Documentação da API FakeStoreCart',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/**/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/add-three-products-to-cart', appController);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
