import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { BookingModule } from './booking/booking.module';
import { ContactModule } from './contact/contact.module';
import { OurTeamModule } from './our-team/our-team.module';
import { AuthPagesModule } from './auth-pages/auth-pages.module';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    BookingModule,
    ContactModule,
    OurTeamModule,
    AuthPagesModule,
    StoreModule.forRoot(
      reducers
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
