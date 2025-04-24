import express from 'express';
import appController from './app.controller';

const app = express();

app.use(express.json());

app.use('/add-three-products-to-cart', appController);

export default app;

if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
