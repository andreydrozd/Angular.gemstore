import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../GemModel';
import { ReviewModel } from '../ReviewModel';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() gem: GemModel;
  // Since review objects aren't being passed in, unlike gem objects, you don't need to put "@Input()"
  newReview: ReviewModel;

  constructor(private avatarService: AvatarService) { }

  submitClicked() {
    // TODO: This does not save reviews: I should figure out a way to send my new review to a "persistent data store" e.g. database.
    this.gem.reviews.push(this.newReview);
    this.ngOnInit();
  }

  ngOnInit() {
    this.newReview = {
      id: -1,
      createDate: '',
      body: '',
      rating: 5,
      author: ''
    };
  }

}
