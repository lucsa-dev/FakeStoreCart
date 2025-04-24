import request from 'supertest';
import app from './index';
import { getProducts } from './modules/product/product.service';
import { addToCart } from './modules/cart/cart.service';
import { Product } from './modules/product/product.interface';
import { CartItem } from './modules/cart/cart.interface';

jest.mock('./modules/product/product.service');
jest.mock('./modules/cart/cart.service');

const mockedGetProducts = getProducts as jest.MockedFunction<typeof getProducts>;
const mockedAddToCart = addToCart as jest.MockedFunction<typeof addToCart>;

describe('GET /add-three-products-to-cart', () => {
  it('deve retornar 200 e o cartItem criado', async () => {
    const products: Product[] = [
      { id: 1, title: 'Product 1', price: 10, description: 'Desc1', category: 'Cat1', image: 'img1' },
      { id: 2, title: 'Product 2', price: 20, description: 'Desc2', category: 'Cat2', image: 'img2' },
      { id: 3, title: 'Product 3', price: 30, description: 'Desc3', category: 'Cat3', image: 'img3' },
    ];
    mockedGetProducts.mockResolvedValue(products);
    const cartItem: CartItem = { id: 11, userId: 1, products };
    mockedAddToCart.mockResolvedValue(cartItem);

    const response = await request(app).get('/add-three-products-to-cart');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(cartItem);
    expect(mockedGetProducts).toHaveBeenCalledWith(3);
    expect(mockedAddToCart).toHaveBeenCalledWith(cartItem);
  });

  it('deve retornar 500 em caso de erro no serviço', async () => {
    mockedGetProducts.mockRejectedValue(new Error('fail'));

    const response = await request(app).get('/add-three-products-to-cart');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Serviço Indisponível');
  });
}); 