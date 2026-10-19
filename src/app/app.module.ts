import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './sections/home/home.component';
import { ProductsComponent } from './sections/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MapComponent } from './sections/map/map.component';
import { CountUpDirective } from './count-up.directive';
import { FooterComponent } from './sections/footer/footer.component';
import { MediaComponent } from './sections/media/media.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ArticleFullTextComponent } from './components/article-full-text/article-full-text.component';
import { ScrollAnimationDirective } from './scroll-animation.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    ProductCardComponent,
    MapComponent,
    CountUpDirective,
    FooterComponent,
    MediaComponent,
    ContactsComponent,
    ArticleFullTextComponent,
    ScrollAnimationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
