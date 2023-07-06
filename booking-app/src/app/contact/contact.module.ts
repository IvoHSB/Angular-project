import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';
import { EmailsSectionComponent } from './emails-section/emails-section.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    ContactPageComponent,
    HeaderComponent,
    EmailsSectionComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContactPageComponent]
})
export class ContactModule { }
