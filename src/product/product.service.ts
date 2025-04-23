import { Product } from './product.interface';

const products: Product[] = [
  {
    id: 1,
    title: 'Produto 1',
    price: 10.99,
    description: 'Descrição do Produto 1',
    category: 'Categoria 1',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Produto 2',
    price: 20.5,
    description: 'Descrição do Produto 2',
    category: 'Categoria 2',
    image: 'https://via.placeholder.com/150'
  }
];

export const getProducts = (): Product[] => products;
