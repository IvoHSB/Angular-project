import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRoomPageComponent } from './booking-room-page.component';

describe('BookingRoomPageComponent', () => {
  let component: BookingRoomPageComponent;
  let fixture: ComponentFixture<BookingRoomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingRoomPageComponent]
    });
    fixture = TestBed.createComponent(BookingRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
