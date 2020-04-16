import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productQuantity = 1;

  constructor() { }

  ngOnInit(): void {
  }


  addQuantity(){
    this.productQuantity++;
  }

  reduceQuantity(){
    if(this.productQuantity > 1){
      this.productQuantity--;
    }else{
      return false;
    }
  }
}
