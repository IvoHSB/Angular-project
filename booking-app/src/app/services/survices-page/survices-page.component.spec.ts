import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvicesPageComponent } from './survices-page.component';

describe('SurvicesPageComponent', () => {
  let component: SurvicesPageComponent;
  let fixture: ComponentFixture<SurvicesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurvicesPageComponent]
    });
    fixture = TestBed.createComponent(SurvicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
