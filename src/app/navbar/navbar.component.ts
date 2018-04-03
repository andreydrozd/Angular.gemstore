import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../CartModel';
import { GemModel } from '../GemModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() cart: CartModel;

  links = [{
    text: 'Home',
    href: '/Home'
  },
  {
    text: 'Account',
    href: '/Account'
  }];

  constructor() { }

  ngOnInit() {
  }

}
