import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutModule } from '../about/about.module';
import { VideoSectionComponent } from './video-section/video-section.component';
import { ServicesModule } from '../services/services.module';
import { HeaderForHomeComponent } from './header-for-home/header-for-home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    VideoSectionComponent,
    HeaderForHomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule, AboutModule, ServicesModule, RouterModule
  ],
  exports: [HomePageComponent, HeaderForHomeComponent, NotFoundPageComponent]
})
export class HomeModule { }
