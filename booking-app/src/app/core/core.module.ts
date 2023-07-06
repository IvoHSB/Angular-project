import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    BookingComponent,
    FooterComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, HeaderComponent, BookingComponent, FooterComponent, NewsletterComponent]
})
export class CoreModule { }
