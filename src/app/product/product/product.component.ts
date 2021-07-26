import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('class.row') true;
  constructor() {}

  ngOnInit(): void {}
}
