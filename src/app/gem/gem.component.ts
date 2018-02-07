import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from "../../gemModel";
import { cartModel } from '../../cartModel';
import { cartItemModel } from '../../cartItemModel';


@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  
  @Input() gem: GemModel;
  @Input() cart: cartModel;
  @Input() cartItem: cartItemModel;

  addToCart(){
    this.gem.inventory --;
    this.cart.totalQuantity ++;
    
    this.cartItem.gemid = this.gem.id;
    this.cartItem.name = this.gem.name;
    this.cartItem.quanity ++;
    this.cartItem.unitPrice = this.gem.price;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
