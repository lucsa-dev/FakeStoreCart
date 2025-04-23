import { Router } from 'express';
import { getProducts } from './product.service';

const router = Router();

router.get('/', (req, res) => {
  const products = getProducts();
  res.json(products);
});

export default router;
