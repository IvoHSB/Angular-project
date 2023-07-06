import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesSectionComponent } from './our-services-section/our-services-section.component';
import { SurvicesPageComponent } from './survices-page/survices-page.component';



@NgModule({
  declarations: [
    OurServicesSectionComponent,
    SurvicesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OurServicesSectionComponent, SurvicesPageComponent]
})
export class ServicesModule { }
