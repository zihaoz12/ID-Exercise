import {ProductStory} from './product-story';
import { ProductReview } from './product-review';

export interface Product {
  id:number;
  item_name:string;
  item_img:string;
  item_details:any;
  item_desc:
    ProductStory
  ;
  item_reviews:
    ProductReview[]
  ;

}
