import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from "../../gemModel";
import { ReviewModel } from "../../reviewModel";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() gem:GemModel;
  @Input() newReview:ReviewModel;

  constructor() { }

  ngOnInit() {
    this.newReview = {
      id: -1,
      createDate: "",
      body: "",
      rating: 5,
      author: ""
    }
  }

}
