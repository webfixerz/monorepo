import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../../libs/fautras/home-page/src').then(m => m.FautrasHomePageModule),
  },
  {
    path: 'trailers',
    loadChildren: '@webfixerz/fautras/home-page#FautrasHomePageModule',
  },
  {
    path: 'contact',
    loadChildren: '@webfixerz/fautras/home-page#FautrasHomePageModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
