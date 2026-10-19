import { Injectable } from '@angular/core';

export interface Product {
  // Translation key prefix: <key>.NAME and <key>.FEATURES (array) under PRODUCTS.ITEMS.
  key: string;
  town: string;
  img: string;
}

// Products from all three towns are shown in every language.
// Add Kuppenheim and Raon-l'Étape products here, with matching entries in the i18n files.
const PRODUCTS: Product[] = [
  {
    key: 'PRODUCTS.ITEMS.OLIVE_OIL',
    town: 'Filottrano',
    img: 'assets/img/products/oliva.webp',
  },
  {
    key: 'PRODUCTS.ITEMS.VERDICCHIO',
    town: 'Filottrano',
    img: 'assets/img/products/wine.webp',
  },
  {
    key: 'PRODUCTS.ITEMS.SPRITZ',
    town: 'Filottrano',
    img: 'assets/img/products/spritz.webp',
  },
];

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
