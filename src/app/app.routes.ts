import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
  // When the user is at the base URL, show the HomeComponent
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  // You can add other routes here later
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
];
