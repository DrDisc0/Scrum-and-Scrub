import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioCreationComponent } from './portfolio-creation/portfolio-creation-component.component';
import { SignInComponent } from './sign-in/sign-in.component'; // Import your SignInComponent
import { SignUpComponent } from './sign-up/sign-up.component'; // Import your SignUpComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (home page)
  { path: 'portfolio-creation', component: PortfolioCreationComponent }, // Portfolio creation page
  { path: 'sign-in', component: SignInComponent }, // Sign-in page
  { path: 'sign-up', component: SignUpComponent }, // Sign-up page
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
