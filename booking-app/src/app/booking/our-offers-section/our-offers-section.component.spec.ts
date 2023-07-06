import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOffersSectionComponent } from './our-offers-section.component';

describe('OurOffersSectionComponent', () => {
  let component: OurOffersSectionComponent;
  let fixture: ComponentFixture<OurOffersSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurOffersSectionComponent]
    });
    fixture = TestBed.createComponent(OurOffersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
