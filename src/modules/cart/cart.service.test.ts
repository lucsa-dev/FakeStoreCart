import { addToCart } from './cart.service';
import { CartItem } from './cart.interface';
import { Product } from '../product/product.interface';

const globalAny: any = global;

describe('addToCart', () => {
  beforeEach(() => {
    globalAny.fetch = jest.fn();
  });



  it('deve chamar fetch com parâmetros corretos e retornar o item criado', async () => {
    const products: Product[] = [
      { id: 1, title: 'Product 1', price: 10, description: 'Desc1', category: 'Cat1', image: 'img1' },
      { id: 2, title: 'Product 2', price: 20, description: 'Desc2', category: 'Cat2', image: 'img2' },
      { id: 3, title: 'Product 3', price: 30, description: 'Desc3', category: 'Cat3', image: 'img3' },
    ];
    const item: CartItem = { id: 1, userId: 1, products: products };
    const created: CartItem = { id: 2, userId: 1, products: products };

    globalAny.fetch.mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: jest.fn().mockResolvedValue(created),
    });

    const result = await addToCart(item);

    expect(globalAny.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    expect(result).toEqual(created);
  });

  it('deve lançar erro quando a resposta não for ok', async () => {
    const errorMessage = 'Internal Server Error';
    globalAny.fetch.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: errorMessage,
    });

    await expect(addToCart({ id: 1, userId: 1, products: [] })).rejects.toThrow(
      `Failed to add to cart: 500 ${errorMessage}`
    );
  });
}); 