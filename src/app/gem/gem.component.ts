import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from "../../gemModel";
import { cartModel } from '../../cartModel';


@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  
  @Input() gem: GemModel;
  @Input() cart: cartModel;

  addToCart(){
    this.gem.inventory = this.gem.inventory - 1;
    this.cart.totalQuantity = this.cart.totalQuantity + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
