import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html'
})
export class ProductListComponent {

  @Input() products!: any[];
  @Output() delete = new EventEmitter<number>();

  removeProduct(id: number) {
    this.delete.emit(id);
  }
}