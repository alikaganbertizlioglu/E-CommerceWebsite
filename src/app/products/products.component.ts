import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedProduct: Product;
  products!: Product[];

  @Input()
  searchText: string = "";

  readonly APIUrl = "https://fakestoreapi.com/";

  constructor(protected http: HttpClient) { }

  async ngOnInit() {
    await this.getProducts(); // Wait for getProducts to complete
  }


  
  async getProducts() {
    this.products = await this.http.get<Product[]>(this.APIUrl + 'products').toPromise();
  }
  


  getNumberOfProducts() {
    return this.products.length;
  }

  getNumberOfInStockProducts() {
    let inStockCounter = 0;
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      if (product.stock > 0) {
        inStockCounter++;
      }
    }
    return inStockCounter;
  }

  
  
  getNumberOfOutOfStockProducts() {
    let outOfStockCounter = 0;
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      if (product.stock <= 0) {
        outOfStockCounter++;
      }
    }
    return outOfStockCounter;
  }
  

  setSearchText(value: string) {
    this.searchText = value;
  }

}
