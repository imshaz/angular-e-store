import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-e-store';
  productList: Product[];
  constructor() {
    this.productList = [
      new Product(
        'sku # NICEHAT',
        'A Nice Black Hat',
        'assets/images/hat.jpg',
        ['Mens', 'Accessories', 'Hats'],
        10.5
      ),
      new Product(
        'sku # BRUNSHOES',
        'Black Running Shoes',
        'assets/images/shoes-blue.jpg',
        ['Mens', 'shoes', 'Runnning Shoes'],
        24.1
      ),

      new Product(
        'sku # TSHIRT',
        'Casual T Shirt',
        'assets/images/shirt.jpg',
        ['Mens', 'apparal', 'Casual Shirts'],
        20.2
      ),
    ];
  }
}
