import { Component, HostListener, ViewChild } from '@angular/core';
import { APP_ROUTES } from '../app.routes';
import { Routes } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavbarComponent {
  routes: Routes = APP_ROUTES;
  showBackgroundNavigation: boolean = false;
  showSideMenu: boolean = false;

  constructor() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.showBackgroundNavigation =
      event.target.scrollingElement.scrollTop > 50;
  }

  toggleSideMenu() {
    this.showSideMenu = !this.showSideMenu;
  }
}
