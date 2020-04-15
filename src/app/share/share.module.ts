import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewFormComponent } from './modal/review-form/review-form.component';



@NgModule({
  declarations: [ReviewFormComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ReviewFormComponent
  ]
})
export class ShareModule { }
