import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    BookingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, HeaderComponent, BookingComponent]
})
export class CoreModule { }
