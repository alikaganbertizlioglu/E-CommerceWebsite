import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface PRODUCT {
  id: Number;
  title: String;
  description:String;
  price: Number;
  discountPercentage:Number;
  rating: Number;
  stock: Number;
  brand: String;
  category: String;
  thumbnail: String;
  images0: String;
}

interface QUERYRESULT {
  products: PRODUCT[];
  total: Number;
  skip: Number;
  limit: Number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  dummyresult:any;
  products!:PRODUCT[];

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

}
