import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesSectionComponent } from './our-services-section/our-services-section.component';
import { SurvicesPageComponent } from './survices-page/survices-page.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';



@NgModule({
  declarations: [
    OurServicesSectionComponent,
    SurvicesPageComponent,
    TestimonialSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OurServicesSectionComponent, SurvicesPageComponent]
})
export class ServicesModule { }
