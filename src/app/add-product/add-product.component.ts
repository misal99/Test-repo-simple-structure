import { Component, OnInit } from '@angular/core';
import { IProducts } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public product: IProducts;

  constructor() { }

  ngOnInit() {
    this.product = {
      id: null,
      name: '',
      img: '',
      description: '',
      quantity: 0,
    };
  }

}
