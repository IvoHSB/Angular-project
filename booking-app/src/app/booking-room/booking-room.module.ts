import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoomPageComponent } from './booking-room-page/booking-room-page.component';



@NgModule({
  declarations: [
    BookingRoomPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookingRoomPageComponent
  ]
})
export class BookingRoomModule { }
