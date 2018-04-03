import { Injectable } from '@angular/core';
import { CartModel } from './CartModel';

@Injectable()
export class CartService {
  cart: CartModel;
  constructor() {
    this.cart = {
      totalPrice: 0,
      totalQuantity: 0,
      items: []
    };
  }
}
