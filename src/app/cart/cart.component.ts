import { Component, OnInit } from '@angular/core';
import { cartModel } from '../../cartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cartModel;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cart = this.cartService.cart;
  }

}
