import { ReviewModel } from './ReviewModel';

export class GemModel {
  id: number;
  name: string;
  price: number;
  description: string;
  fullImagePath: string;
  inventory: number;
  colors: string[];
  reviews: ReviewModel[];
}
