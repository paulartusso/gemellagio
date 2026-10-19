import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ProductsComponent } from './sections/products/products.component';
import { MediaComponent } from './sections/media/media.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ArticleFullTextComponent } from './components/article-full-text/article-full-text.component';

// `titleKey` is translated into the browser tab title by AppComponent.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { titleKey: '' } },
  { path: 'products', component: ProductsComponent, data: { titleKey: 'NAV.PRODUCTS' } },
  { path: 'services', redirectTo: '/products' },
  { path: 'media', component: MediaComponent, data: { titleKey: 'NAV.MEDIA' } },
  { path: 'media/full-article/:id', component: ArticleFullTextComponent },
  { path: 'contacts', component: ContactsComponent, data: { titleKey: 'NAV.CONTACT' } },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
