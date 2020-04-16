import { Component, OnInit, Input } from '@angular/core';
import { ReviewModalService } from 'src/app/share/services/review-modal.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  @Input() productReview:any
  constructor(
    private modalService: ReviewModalService
  ) { }

  ngOnInit(): void {
    console.log(this.productReview)
  }

  showModal(){
    console.log("Show Modal")
    this.modalService.showModal('ReviewForm-Modal')
  }
}
