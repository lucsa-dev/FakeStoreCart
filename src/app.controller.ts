import { Router } from 'express';
import { getProducts } from './modules/product/product.service';
import { addToCart } from './modules/cart/cart.service';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const products = await getProducts(3);
    const cartItem = {
      id: 11,
      userId: 1,
      products: products,
    };
    const addCart = await addToCart(cartItem);
    res.json(addCart);
  } catch (error) {
    res.status(500).json({ error: 'Serviço Indisponível' });
  }
});

export default router;
