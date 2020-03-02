import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts, ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProducts;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.product = this.service.findRecordById(data.id);
    });
  }

}
