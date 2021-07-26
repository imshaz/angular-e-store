import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../../product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @HostBinding('class.product-list') true;
  currentProduct: Product = null;
  constructor() {}
  productClicked(selectedP) {
    this.currentProduct = selectedP;
  }

  isSelected(product: Product): Boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
  ngOnInit(): void {}
}
