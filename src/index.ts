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
    servers: [{ url: '/' }],
  },
  apis: process.env.NODE_ENV === 'production'
    ? ['./dist/**/*.js']
    : ['./src/**/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/add-three-products-to-cart', appController);
// Servir interface e assets do Swagger em '/docs'
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(swaggerSpec));


export default app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
