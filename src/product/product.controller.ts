import { Router } from 'express';
import { getProducts } from './product.service';

const router = Router();

router.get('/', async (req, res) => {
  const limitParam = req.query.limit as string;
  const limit = limitParam ? parseInt(limitParam, 10) : undefined;
  try {
    const products = await getProducts(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
