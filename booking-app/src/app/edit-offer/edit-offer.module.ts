import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditOfferPageComponent } from './edit-offer-page/edit-offer-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditOfferPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    EditOfferPageComponent
  ]
})
export class EditOfferModule { }
