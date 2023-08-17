import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedProduct : Product;
  dummyresult: any;
  products!: Product[];
  
  @Input()
  searchText: string = "";

  readonly APIUrl = "https://localhost:7083";
  constructor(protected http: HttpClient) { }


  async ngOnInit() {
    console.log("productsa gitti");
    await this.getProducts(); // Wait for getProducts to complete
    console.log(this.products[1]);
    console.log(this.products[3]);

  }

  async getProducts() {
    this.products = [];
    const data = await this.http.get(this.APIUrl + '/getProducts').toPromise();
    this.dummyresult = data;
    this.products = this.dummyresult;
  }

  getNumberOfProducts() {
    return this.products.length;
  }

  getInStockProducts() {
    let counter = 0;
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (element.stock > 0) {
        counter++;
      }
    }
    return counter;
  }

  getOutOfStockProducts() {
    let counter = 0;

    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];

      if (element.stock <= 0) {
        counter++;
      }

    }
    return counter;
  }

  setSearchText(value:string){
    this.searchText=value;
  }

  
  

}
