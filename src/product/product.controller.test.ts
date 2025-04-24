import request from 'supertest';
import app from '../index';
import * as productService from './product.service';
import { Product } from './product.interface';

describe('Rota GET /product', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('deve tratar erro do serviço com status 500', async () => {
    jest.spyOn(productService, 'getProducts').mockRejectedValue(new Error('fail'));

    const res = await request(app).get('/product');

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: 'Erro ao buscar produtos' });
  });
}); 