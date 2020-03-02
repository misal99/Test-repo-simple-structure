import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  public products: IProducts[] = [
    { id: '1', name: 'a', img: '', description: 'abc', quantity: 10 },
    { id: '2', name: 'b', img: '', description: 'abcd', quantity: 14 },
    { id: '3', name: 'c', img: '', description: 'abce', quantity: 13 },
    { id: '4', name: 'd', img: '', description: 'abcf', quantity: 12 },
  ];

  async getProduct(): Promise<IProducts[]> {
    if (localStorage.getItem('products')) {
      return await JSON.parse(localStorage.getItem('products'));
    } else {
      localStorage.setItem('products', JSON.stringify(this.products));
      return this.products;
    }
  }

  findRecordById(id: string): IProducts {
    this.products = JSON.parse(localStorage.getItem('products'));
    return this.products.find(item => {
      return item.id === id;
    });
  }

  update(product: IProducts) {
    const index = this.products.findIndex(item => {
      return product.id === item.id;
    });
    this.products[index] = product;
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  create(product: IProducts) {
    this.products.unshift(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  delete(id: string) {
    const index = this.products.findIndex(item => {
      return id === item.id;
    });

    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }
}

export interface IProducts {
  id: string;
  name: string;
  img: string;
  description: string;
  quantity: number;
}
