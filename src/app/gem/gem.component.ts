import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../GemModel';
import { CartModel } from '../CartModel';
import { CartItemModel } from '../CartItemModel';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;
  @Input() cart: CartModel;
  @Input() cartItem: CartItemModel;

  addToCart() {
    this.gem.inventory --;
    this.cart.totalQuantity ++;

    this.cartItem.gemid = this.gem.id;
    this.cartItem.name = this.gem.name;
    this.cartItem.quantity ++;
    this.cartItem.unitPrice = this.gem.price;

  }

  constructor() { }

  ngOnInit() {
  }

}
