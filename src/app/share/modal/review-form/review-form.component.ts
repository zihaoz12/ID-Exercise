import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  hideModal(e){
    if(e.target.className === 'review-submit-btn'){
      this.elementRef.nativeElement.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }

}
