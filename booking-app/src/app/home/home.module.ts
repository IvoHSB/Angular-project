import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutModule } from '../about/about.module';
import { VideoSectionComponent } from './video-section/video-section.component';
import { ServicesModule } from '../services/services.module';



@NgModule({
  declarations: [
    HomePageComponent,
    VideoSectionComponent
  ],
  imports: [
    CommonModule, AboutModule, ServicesModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
