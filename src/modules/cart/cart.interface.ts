import { Product } from "../product/product.interface";

export interface CartItem {
    id: number;
    userId: number;
    products: Product[];
}