import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from "../../gemModel";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() gem:GemModel;

  constructor() { }

  ngOnInit() {
  }

}
