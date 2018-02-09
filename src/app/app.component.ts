import { Component, OnInit } from '@angular/core';
import { GemModel } from '../gemmodel';
import { cartModel } from '../cartModel';
import { cartItemModel } from '../cartItemModel';
import { ReviewModel } from '../reviewModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    //TODO: pull data from an API here
    this.httpClient.get<GemModel[]>("/assets/gems.json").subscribe(results => {this.gems = results});
  }

  cart:cartModel = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
  }

  gems:GemModel[];

}
