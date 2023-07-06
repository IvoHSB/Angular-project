import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutModule } from '../about/about.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule, AboutModule
  ],
  exports: [HomePageComponent]
})
export class HomeModule { }
