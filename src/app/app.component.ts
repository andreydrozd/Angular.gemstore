import { Component, OnInit } from '@angular/core';
import { GemModel } from '../gemmodel';
import { cartModel } from '../cartModel';
import { cartItemModel } from '../cartItemModel';
import { ReviewModel } from '../reviewModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(){
    //TODO: pull data from an API here
  }

  cart:cartModel = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
  }

  gems:GemModel[];
  
}
