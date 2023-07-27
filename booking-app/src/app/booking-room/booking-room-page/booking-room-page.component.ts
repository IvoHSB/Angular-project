import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-booking-room-page',
  templateUrl: './booking-room-page.component.html',
  styleUrls: ['./booking-room-page.component.css']
})
export class BookingRoomPageComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Room Details'}));
  }
}
