import { Product } from './product.interface';

export const getProducts = async (limit?: number): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();
  products.sort((a, b) => a.id - b.id);
  if (limit && limit > 0) {
    return products.slice(0, limit);
  }
  return products;
};
