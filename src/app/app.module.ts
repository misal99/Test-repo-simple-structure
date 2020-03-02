import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductService } from './services/product.service';
import { AuthGaurd } from './services/authGaurd.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'products', component: ProductListComponent, canActivate: [AuthGaurd]},
      {path: 'product/new', component: AddProductComponent, canActivate: [AuthGaurd]},
      {path: 'product/:id', component: EditProductComponent, canActivate: [AuthGaurd]},
      // {path: '', component: LoginComponent},

    ]),
  ],
  providers: [ProductService, AuthenticationService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
