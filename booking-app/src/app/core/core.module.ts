import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    BookingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, HeaderComponent, BookingComponent, FooterComponent]
})
export class CoreModule { }
