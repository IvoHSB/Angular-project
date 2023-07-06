import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { BookingModule } from './booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
