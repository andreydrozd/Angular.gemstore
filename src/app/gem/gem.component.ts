import { Component, OnInit } from '@angular/core';
import { GemModel } from "../../gemmodel";


@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  
  gem:GemModel = {
    id: 1,
    name: "Dodecahedron",
    price: 2.95,
    description: "Some gems have hidden qualities beyond their lustre, behond their shine... Dodecahedron is one of those gems.",
    fullImagePath: "./assets/gem-images/gem-01.gif"
  }
  constructor() { }

  ngOnInit() {
  }

}
