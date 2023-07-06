import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTeamSectionComponent } from './out-team-section.component';

describe('OutTeamSectionComponent', () => {
  let component: OutTeamSectionComponent;
  let fixture: ComponentFixture<OutTeamSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutTeamSectionComponent]
    });
    fixture = TestBed.createComponent(OutTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
