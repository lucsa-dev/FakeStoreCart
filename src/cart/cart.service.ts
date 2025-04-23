export interface CartItem {
  productId: number;
  quantity: number;
}

const cart: CartItem[] = [];

export const addToCart = (item: CartItem): CartItem => {
  cart.push(item);
  return item;
};
