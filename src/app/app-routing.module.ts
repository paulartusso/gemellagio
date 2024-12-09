import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { ExpertisesComponent } from './sections/expertises/expertises.component';
import { DigitalFactoryComponent } from './sections/expertises/digital-factory/digital-factory.component';
import { WorkplaceManagementComponent } from './sections/expertises/workplace-management/workplace-management.component';
import { InfrastructureEngineeringComponent } from './sections/expertises/infrastructure-engineering/infrastructure-engineering.component';
import { TemporaryProjectsComponent } from './sections/expertises/temporary-projects/temporary-projects.component';
import { CaseStudiesComponent } from './sections/case-studies/case-studies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ExpertisesComponent},
  { path: 'services/digital-factory', component: DigitalFactoryComponent},
  { path: 'services/workplace-management', component: WorkplaceManagementComponent},
  { path: 'services/infrastructure-engineering', component: InfrastructureEngineeringComponent},
  { path: 'services/temporary-projects', component: TemporaryProjectsComponent},
  { path: 'case-studies', component: CaseStudiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
