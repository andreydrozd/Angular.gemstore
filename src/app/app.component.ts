import { Component, OnInit } from '@angular/core';
import { GemModel } from './GemModel';
import { CartModel } from './CartModel';
import { CartItemModel } from './CartItemModel';
import { ReviewModel } from './ReviewModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  cart: CartModel = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
  };

  gems: GemModel[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<GemModel[]>('/assets/gems.json').subscribe(results => { this.gems = results; });
  }
}
