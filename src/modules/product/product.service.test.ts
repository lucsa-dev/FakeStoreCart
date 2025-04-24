import { getProducts } from './product.service';
import { Product } from './product.interface';

describe('getProducts service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('deve buscar e retornar produtos ordenados sem limit', async () => {
    const fakeProducts: Product[] = [
      { id: 2, title: 'B', price: 2.0, description: 'desc B', category: 'cat B', image: 'urlB' },
      { id: 1, title: 'A', price: 1.0, description: 'desc A', category: 'cat A', image: 'urlA' }
    ];
    (global as any).fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeProducts)
    });

    const result = await getProducts();

    expect(global.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(result).toEqual([
      { id: 1, title: 'A', price: 1.0, description: 'desc A', category: 'cat A', image: 'urlA' },
      { id: 2, title: 'B', price: 2.0, description: 'desc B', category: 'cat B', image: 'urlB' }
    ]);
  });

  it('deve retornar apenas o número de produtos definido por limit', async () => {
    const fakeProducts: Product[] = [
      { id: 3, title: 'C', price: 3.0, description: 'desc C', category: 'cat C', image: 'urlC' },
      { id: 2, title: 'B', price: 2.0, description: 'desc B', category: 'cat B', image: 'urlB' },
      { id: 1, title: 'A', price: 1.0, description: 'desc A', category: 'cat A', image: 'urlA' }
    ];
    (global as any).fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeProducts)
    });

    const result = await getProducts(2);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { id: 1, title: 'A', price: 1.0, description: 'desc A', category: 'cat A', image: 'urlA' },
      { id: 2, title: 'B', price: 2.0, description: 'desc B', category: 'cat B', image: 'urlB' }
    ]);
  });
}); 