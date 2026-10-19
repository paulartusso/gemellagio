import { Component, Input } from '@angular/core';
import { Product } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  // Each product has three features in the i18n files (PRODUCTS.ITEMS.<X>.FEATURES).
  readonly featureIndexes = [0, 1, 2];
}
