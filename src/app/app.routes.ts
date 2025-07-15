import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // When the user is at the base URL, show the HomeComponent
  { path: '', component: Home, pathMatch: 'full' },

  // You can add other routes here later
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
];
