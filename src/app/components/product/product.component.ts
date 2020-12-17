import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { Product } from '../../models/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: Product;
  @Output() itemClick = new EventEmitter<Product>();

  clickItem(product: Product) {
    console.log('here')
  }
}