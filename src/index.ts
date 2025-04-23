import express from 'express';
import productRouter from './product/product.controller';
import cartRouter from './cart/cart.controller';

const app = express();

app.use(express.json());

app.use('/product', productRouter);
app.use('/cart', cartRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
