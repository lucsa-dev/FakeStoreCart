import { Router, Request, Response } from 'express';
import { getProducts } from './modules/product/product.service';
import { addToCart } from './modules/cart/cart.service';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Endpoints para operações no carrinho
 */
/**
 * @swagger
 * /add-three-products-to-cart:
 *   post:
 *     summary: Adiciona três produtos ao carrinho
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Itens adicionados ao carrinho com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 11
 *                 userId:
 *                   type: integer
 *                   example: 1
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Example Product Title"
 *                       price:
 *                         type: number
 *                         example: 10.99
 *       500:
 *         description: Serviço indisponível
 */

router.post('/', async (req: Request, res: Response) => {
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
