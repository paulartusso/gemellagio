import { Injectable } from '@angular/core';
import { AppLanguage } from './translation.service';

export interface CountryProduct {
  title: string;
  firstItem: string;
  secondItem: string;
  thirdItem: string;
  img: string;
}

// One product list per language/country. Fill in DE and FR with actual data
const PRODUCTS: Record<AppLanguage, CountryProduct[]> = {
  it: [
    {
      title: 'Olio di Oliva',
      firstItem: 'Fatto in Filottrano',
      secondItem: 'Olive verdi',
      thirdItem: 'Estratto a freddo',
      img: '../../../assets/img/products/oliva.jpg',
    },
    {
      title: 'Verdicchio del Castello di Jesi',
      firstItem: 'Vino Bianco',
      secondItem: 'Di Jesi',
      thirdItem: 'Buono',
      img: '../../../assets/img/products/wine.jpg',
    },
    {
      title: 'Verdicchio del Castello di Jesi',
      firstItem: 'Vino Bianco',
      secondItem: 'Di Jesi',
      thirdItem: 'Buono',
      img: '../../../assets/img/products/wine.jpg',
    },
    {
      title: 'Aperol Spritz',
      firstItem: 'Arancione',
      secondItem: 'Bla',
      thirdItem: 'Fresco',
      img: '../../../assets/img/products/spritz.jpg',
    },
  ],
  de: [
    {
      title: '__TODO: Produkt aus Kuppenheim__',
      firstItem: '__TODO__',
      secondItem: '__TODO__',
      thirdItem: '__TODO__',
      img: '../../../assets/img/placeholder.jpg',
    },
  ],
  fr: [
    {
      title: "__TODO: Produit de Raon-l'Étape__",
      firstItem: '__TODO__',
      secondItem: '__TODO__',
      thirdItem: '__TODO__',
      img: '../../../assets/img/placeholder.jpg',
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class ProductsService {
  getProducts(lang: AppLanguage): CountryProduct[] {
    return PRODUCTS[lang];
  }
}