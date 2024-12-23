import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {FeaturesComponent} from './pages/features/features.component';

// Define routes for each component
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'features', component: FeaturesComponent },  // About route
  { path: 'home', component: HomeComponent }  // Contact route
];


