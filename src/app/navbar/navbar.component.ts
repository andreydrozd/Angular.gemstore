import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../CartModel';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: CartModel;

  links = [{
    text: 'Home',
    href: '/'
  },
  {
    text: 'Account',
    href: '/account'
  }];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

}
