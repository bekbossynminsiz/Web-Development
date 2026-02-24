import { Component, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,           // <-- обязательно
  imports: [ProductListComponent] // <-- импортируем дочерние компоненты
})
export class AppComponent {
  selectedCategoryId = signal<number | null>(null);

  constructor(public productService: ProductService) {}

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  selectedProducts() {
    if (this.selectedCategoryId() === null) return [];
    return this.productService.products().filter(
      p => p.categoryId === this.selectedCategoryId()
    );
  }

  onDelete(id: number) {
    this.productService.products.update(products =>
      products.filter(p => p.id !== id)
    );
  }
}