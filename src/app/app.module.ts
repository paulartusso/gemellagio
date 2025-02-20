import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './sections/home/home.component';
import { ExpertisesComponent } from './sections/expertises/expertises.component';
import { ExpertiseCardComponent } from './components/expertise-card/expertise-card.component';
import { InnovationComponent } from './sections/innovation/innovation.component';
import { MapComponent } from './sections/map/map.component';
import { CountUpDirective } from './count-up.directive';
import { FooterComponent } from './sections/footer/footer.component';
import { DigitalFactoryComponent } from './sections/expertises/digital-factory/digital-factory.component';
import { DigitalFactoryCardComponent } from './components/digital-factory-card/digital-factory-card.component';
import { SviluppoCardComponent } from './components/sviluppo-card/sviluppo-card.component';
import { WorkplaceManagementComponent } from './sections/expertises/workplace-management/workplace-management.component';
import { WorkplaceManagementCardComponent } from './components/workplace-management-card/workplace-management-card.component';
import { InfrastructureEngineeringComponent } from './sections/expertises/infrastructure-engineering/infrastructure-engineering.component';
import { TemporaryProjectsComponent } from './sections/expertises/temporary-projects/temporary-projects.component';
import { CaseStudiesComponent } from './sections/case-studies/case-studies.component';
import { LogisticaItemComponent } from './components/logistica-item/logistica-item.component';
import { CaseStudyItemComponent } from './components/case-study-item/case-study-item.component';
import { MediaComponent } from './sections/media/media.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JoinUsComponent } from './sections/join-us/join-us.component';
import { ArticleComponent } from './components/article-item/article.component';
import { ArticleFullTextComponent } from './components/article-full-text/article-full-text.component';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ExpertisesComponent,
    ExpertiseCardComponent,
    InnovationComponent,
    MapComponent,
    CountUpDirective,
    FooterComponent,
    DigitalFactoryComponent,
    DigitalFactoryCardComponent,
    SviluppoCardComponent,
    WorkplaceManagementComponent,
    WorkplaceManagementCardComponent,
    InfrastructureEngineeringComponent,
    TemporaryProjectsComponent,
    CaseStudiesComponent,
    LogisticaItemComponent,
    CaseStudyItemComponent,
    MediaComponent,
    ContactsComponent,
    JoinUsComponent,
    ArticleComponent,
    ArticleFullTextComponent,
    ScrollAnimationDirective,
    JobCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
