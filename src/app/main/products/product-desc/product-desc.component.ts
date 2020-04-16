import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  @Input() productStory:any
  constructor() { }

  ngOnInit(): void {
  }

}
