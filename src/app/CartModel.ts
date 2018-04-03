import { CartItemModel } from './CartItemModel';

export class CartModel {
  items: CartItemModel[];
  totalQuantity: number;
  totalPrice: number;
}
