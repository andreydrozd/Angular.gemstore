import { Component, OnInit, Input } from '@angular/core';
import { cartModel } from '../../cartModel';
import { GemModel } from '../../gemModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
