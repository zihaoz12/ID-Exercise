import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReviewComponent } from './products/product-review/product-review.component';
import { ProductDescComponent } from './products/product-desc/product-desc.component';
import { ProductComponent } from './products/product/product.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [ProductReviewComponent, ProductDescComponent, ProductComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    ProductComponent,
    ProductDescComponent,
    ProductReviewComponent
  ]
})
export class MainModule { }
