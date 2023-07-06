import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { OutTeamSectionComponent } from './out-team-section/out-team-section.component';



@NgModule({
  declarations: [
    AboutUsSectionComponent,
    OutTeamSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AboutUsSectionComponent, OutTeamSectionComponent]
})
export class AboutModule { }
