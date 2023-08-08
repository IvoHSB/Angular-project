import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';
import { EmailsSectionComponent } from './emails-section/emails-section.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactPageComponent,
    HeaderComponent,
    EmailsSectionComponent,
    MapComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ContactPageComponent]
})
export class ContactModule { }
