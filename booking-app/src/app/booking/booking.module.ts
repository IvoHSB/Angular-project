import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingPageComponent } from './booking-page/booking-page.component';



@NgModule({
  declarations: [
    BookingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BookingPageComponent]
})
export class BookingModule { }
