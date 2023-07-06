import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { OutTeamSectionComponent } from './out-team-section/out-team-section.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    AboutUsSectionComponent,
    OutTeamSectionComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AboutUsSectionComponent, OutTeamSectionComponent, AboutPageComponent]
})
export class AboutModule { }
