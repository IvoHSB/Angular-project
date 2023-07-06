import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutModule } from '../about/about.module';
import { VideoSectionComponent } from './video-section/video-section.component';



@NgModule({
  declarations: [
    HomePageComponent,
    VideoSectionComponent
  ],
  imports: [
    CommonModule, AboutModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
