import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productQuantity = 1;

  product:any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe( data=>{
      this.product = data;
      console.log(this.product)
    }


    )
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
