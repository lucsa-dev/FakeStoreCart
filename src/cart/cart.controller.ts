import { Router } from 'express';
import { addToCart, CartItem } from './cart.service';

const router = Router();

router.post('/', (req, res) => {
  const item: CartItem = req.body;
  const addedItem = addToCart(item);
  res.json(addedItem);
});

export default router;
