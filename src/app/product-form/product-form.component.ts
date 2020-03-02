import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IProducts, ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnChanges {

  @Input() product: IProducts;
  @Input() new = false;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProductService, private router: Router) { }

  ngOnChanges() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [this.product.id ? this.product.id : Math.floor(Math.random() * 100), Validators.required],
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      quantity: [this.product.quantity, Validators.required],

    });
  }

  submit() {
    if (this.new) {
      this.service.create(this.form.value)
    } else {
      this.service.update(this.form.value);

    }
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }

}
