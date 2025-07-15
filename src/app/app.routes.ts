import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { Education } from './pages/education/education';

export const routes: Routes = [
  // When the user is at the base URL, show the HomeComponent
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
  // You can add other routes here later
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
];
