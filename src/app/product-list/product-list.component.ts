import { Component, OnInit } from '@angular/core';
import { ProductService, IProducts } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: IProducts[] = [];
  public currentUser;

  constructor(private service: ProductService, private router: Router) { }

  async ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.products = await this.service.getProduct();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  delete(id: string) {
    this.products = this.service.delete(id);
  }

}
