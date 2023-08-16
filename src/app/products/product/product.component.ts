import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product : {
    id: number;
    title: String;
    description:String;
    price: number;
    discountPercentage:number;
    rating: number;
    stock: number;
    brand: String;
    category: String;
    thumbnail: String;
    images0: String;
  };

}
