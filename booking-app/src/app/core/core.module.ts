import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    BookingComponent,
    FooterComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent, HeaderComponent, BookingComponent, FooterComponent, NewsletterComponent]
})
export class CoreModule { }
