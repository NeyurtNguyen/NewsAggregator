import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {path: '', component: TopHeadingComponent}, //home
  {path: 'business', component: BusinessComponent}, //business news
  {path: 'entertainment', component: EntertainmentComponent}, //Entertainment news
  {path: 'general', component: GeneralComponent}, //General news
  {path: 'health', component: HealthComponent}, //Health news
  {path: 'science', component: ScienceComponent}, //Science news
  {path: 'sports', component: SportsComponent}, //Sports news
  {path: 'technology', component: TechnologyComponent}, //Technology news
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
