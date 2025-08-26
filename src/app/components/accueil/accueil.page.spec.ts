import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AccueilPage } from './accueil.page';

describe('AccueilPage', () => {
  let component: AccueilPage;
  let fixture: ComponentFixture<AccueilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AccueilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
