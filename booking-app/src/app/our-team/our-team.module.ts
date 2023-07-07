import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamPageComponent } from './our-team-page/our-team-page.component';



@NgModule({
  declarations: [
    OurTeamPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OurTeamPageComponent
  ]
})
export class OurTeamModule { }
