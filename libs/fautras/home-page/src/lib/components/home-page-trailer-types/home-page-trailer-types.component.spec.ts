import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTrailerTypesComponent } from './home-page-trailer-types.component';

describe('HomePageTrailerTypesComponent', () => {
  let component: HomePageTrailerTypesComponent;
  let fixture: ComponentFixture<HomePageTrailerTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTrailerTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTrailerTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
