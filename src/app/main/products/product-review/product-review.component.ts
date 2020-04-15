import { Component, OnInit } from '@angular/core';
import { ReviewModalService } from 'src/app/share/services/review-modal.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent implements OnInit {

  constructor(
    private modalService: ReviewModalService
  ) { }

  ngOnInit(): void {
  }

  showModal(){
    console.log("Show Modal")
    this.modalService.showModal('Hello-Modal')
  }
}
