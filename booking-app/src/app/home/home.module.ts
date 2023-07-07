import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutModule } from '../about/about.module';
import { VideoSectionComponent } from './video-section/video-section.component';
import { ServicesModule } from '../services/services.module';
import { HeaderForHomeComponent } from './header-for-home/header-for-home.component';



@NgModule({
  declarations: [
    HomePageComponent,
    VideoSectionComponent,
    HeaderForHomeComponent
  ],
  imports: [
    CommonModule, AboutModule, ServicesModule
  ],
  exports: [HomePageComponent, HeaderForHomeComponent]
})
export class HomeModule { }
