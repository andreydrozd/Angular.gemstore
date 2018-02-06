import { Component } from '@angular/core';
import { GemModel } from '../gemmodel';
import { cartModel } from '../cartModel';
import { cartItemModel } from '../cartItemModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This is where properties are defined.
export class AppComponent {
  title = 'Gem Store';
  hotdog = "This is the hotdog property.";
  now = Date.now().toString();

  cart: cartModel = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
  }

  gems:GemModel[] = [{
    id: 1,
    name: "Dodecahedron",
    price: 2.95,
    description: "Some gems have hidden qualities beyond their lustre, behond their shine... Dodecahedron is one of those gems.",
    fullImagePath: "./assets/gem-images/gem-01.gif",
    inventory: 0,
    colors: ["red", "blue", "green"]
  },
  {
    id: 2,
    name: "Pentagonal",
    price: 5.95,
    description: "The origin of the pentagonal gem is unknown, hence it\'s low value",
    fullImagePath: "./assets/gem-images/gem-02.gif",
    inventory: 0,
    colors: ["orange", "yellow"]
  },
  {
    id: 3,
    name: "Hexagonal",
    price: 12.95,
    description: "The hexagonal gem is one of our best sellers",
    fullImagePath: "./assets/gem-images/gem-03.gif",
    inventory: 10,
    colors: ["bling", "money"]    
  }]
}
