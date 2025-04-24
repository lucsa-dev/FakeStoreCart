import { CartItem } from "./cart.interface";

const cart: CartItem[] = [];

export const addToCart = async (item: CartItem): Promise<CartItem> => {
  const response = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error(`Failed to add to cart: ${response.status} ${response.statusText}`);
  }
  const created: CartItem = await response.json();
  cart.push(created);
  return created;
};
