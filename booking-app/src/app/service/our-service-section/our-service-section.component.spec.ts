import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServiceSectionComponent } from './our-service-section.component';

describe('OurServiceSectionComponent', () => {
  let component: OurServiceSectionComponent;
  let fixture: ComponentFixture<OurServiceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurServiceSectionComponent]
    });
    fixture = TestBed.createComponent(OurServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
