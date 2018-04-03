import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../GemModel';
import { CartModel } from '../CartModel';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;
  cart: CartModel;

  addToCart() {
    this.gem.inventory --;
    this.cart.totalQuantity ++;

    if (this.cart.items.map((x) => x.gemid).indexOf(this.gem.id) === -1) {
      this.cart.items.push({
        gemid: this.gem.id,
        name: this.gem.name,
        unitPrice: this.gem.price,
        quantity: 1
      });
    } else {
      this.cart.items.filter((x) => x.gemid === this.gem.id)[0].quantity += 1;
    }
    this.cart.totalPrice = this.cart.items.map((x) => x.quantity * x.unitPrice).reduce((x, y) => x + y);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

}
