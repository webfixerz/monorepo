import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './container/home-page/home-page.component';
import {
  AboutIntroComponent,
  HomePageTrailerTypesComponent,
} from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const containers = [HomePageComponent];
const components = [HomePageTrailerTypesComponent, AboutIntroComponent];
const angularModules = [
  CommonModule,
  RouterModule.forChild([
    { path: '', pathMatch: 'full', component: HomePageComponent },
  ]),
];
const externalModules = [MatIconModule, MatButtonModule, MatCardModule];

@NgModule({
  declarations: [...containers, ...components],
  imports: [...angularModules, ...externalModules],
})
export class FautrasHomePageModule {}
