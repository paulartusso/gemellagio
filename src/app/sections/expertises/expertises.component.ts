import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppLanguage, TranslationService } from '../../services/translation.service';
import { CountryProduct, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.scss'],
})
export class ExpertisesComponent implements OnInit, OnDestroy {
  products: CountryProduct[] = [];

  private sub?: Subscription;

  constructor(
    private readonly translation: TranslationService,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.sub = this.translation.language$.subscribe((lang: AppLanguage) => {
      this.products = this.productsService.getProducts(lang);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}