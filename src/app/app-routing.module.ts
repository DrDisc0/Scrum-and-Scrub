import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioCreationComponent } from './portfolio-creation/portfolio-creation.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (home page)
  { path: 'portfolio-creation', component: PortfolioCreationComponent }, // Portfolio creation page
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
