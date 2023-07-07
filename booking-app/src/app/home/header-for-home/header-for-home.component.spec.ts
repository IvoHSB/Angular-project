import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForHomeComponent } from './header-for-home.component';

describe('HeaderForHomeComponent', () => {
  let component: HeaderForHomeComponent;
  let fixture: ComponentFixture<HeaderForHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderForHomeComponent]
    });
    fixture = TestBed.createComponent(HeaderForHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
