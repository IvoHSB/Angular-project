import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsSectionComponent } from './emails-section.component';

describe('EmailsSectionComponent', () => {
  let component: EmailsSectionComponent;
  let fixture: ComponentFixture<EmailsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailsSectionComponent]
    });
    fixture = TestBed.createComponent(EmailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
