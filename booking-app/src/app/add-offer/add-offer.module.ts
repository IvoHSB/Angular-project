import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOfferPageComponent } from './add-offer-page/add-offer-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddOfferPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AddOfferPageComponent
  ]
})
export class AddOfferModule { }
