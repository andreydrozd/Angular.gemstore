import { Component, OnInit } from '@angular/core';

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
  }, 
  {
		text: 'Cart',
		href: '/Cart'
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
