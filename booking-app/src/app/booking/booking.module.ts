import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurOffersSectionComponent } from './our-offers-section/our-offers-section.component';
import { BookingPageComponent } from './booking-page/booking-page.component';



@NgModule({
  declarations: [
    OurOffersSectionComponent,
    BookingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BookingPageComponent]
})
export class BookingModule { }
