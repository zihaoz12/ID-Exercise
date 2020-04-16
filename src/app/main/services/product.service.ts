import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productData }from 'src/mock/product.data';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(): Observable<Product>{
    return new Observable( observable =>
      observable.next(productData)
    )
  }
}
