import { Routes } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'trailers',
    component: HomePageComponent,
  },
  {
    path: 'contact',
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
