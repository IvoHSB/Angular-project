import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-booking-room-page',
  templateUrl: './booking-room-page.component.html',
  styleUrls: ['./booking-room-page.component.css']
})
export class BookingRoomPageComponent implements OnInit {

  amenities: string[] = ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'In-room Safe', 'Work Desk', 'Toiletries', 'Personal care', 'Coffee Kit', 'Free parking', 'Mobile Check-In', 'Pampered Pets', 'Kid Equipment', 'In-Room Cocktail Station', 'Fitness Tech', 'Arcade Games', 'Musical Instruments', 'Ironing Board', 'Iron', 'Bath Towel', 'Dental Kit', 'Shaving Kit'];
  room: any = false;

  constructor(private _bookingService: bookingService ,private store: Store, private location: Location) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Room Details'}));

    const id = this.location.path().split('/')[2];

    this._bookingService.getOfferById(id).subscribe(r => {
      this.room = r;
      console.log(r)
    })
  }
}
