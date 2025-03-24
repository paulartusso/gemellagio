import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ExpertisesComponent } from './sections/expertises/expertises.component';
import { DigitalFactoryComponent } from './sections/expertises/digital-factory/digital-factory.component';
import { WorkplaceManagementComponent } from './sections/expertises/workplace-management/workplace-management.component';
import { InfrastructureEngineeringComponent } from './sections/expertises/infrastructure-engineering/infrastructure-engineering.component';
import { TemporaryProjectsComponent } from './sections/expertises/temporary-projects/temporary-projects.component';
import { CaseStudiesComponent } from './sections/case-studies/case-studies.component';
import { MediaComponent } from './sections/media/media.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { JoinUsComponent } from './sections/join-us/join-us.component';
import { ArticleFullTextComponent } from './components/article-full-text/article-full-text.component';
import { ApplicationsComponent } from './sections/join-us/applications/applications.component';
import { CrossChannelComponent } from './sections/case-studies/cross-channel/cross-channel.component';
import { ToolsSelectionComponent } from './sections/case-studies/tools-selection/tools-selection.component';
import { MobilityComponent } from './sections/case-studies/mobility/mobility.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ExpertisesComponent },
  { path: 'services/digital-factory', component: DigitalFactoryComponent },
  {
    path: 'services/workplace-management',
    component: WorkplaceManagementComponent,
  },
  {
    path: 'services/infrastructure-engineering',
    component: InfrastructureEngineeringComponent,
  },
  {
    path: 'services/temporary-projects',
    component: TemporaryProjectsComponent,
  },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'case-studies/cross-channel', component: CrossChannelComponent },
  { path: 'case-studies/tools-selection', component: ToolsSelectionComponent },
  { path: 'case-studies/mobility', component: MobilityComponent },
  { path: 'media', component: MediaComponent },
  { path: 'media/full-article/:id', component: ArticleFullTextComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'join-us/application/:id', component: ApplicationsComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
