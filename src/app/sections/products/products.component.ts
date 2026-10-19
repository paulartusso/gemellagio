import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  readonly products: Product[];

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }
}
