import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { SurvicesPageComponent } from './services/survices-page/survices-page.component';
import { BookingPageComponent } from './booking/booking-page/booking-page.component';
import { OurTeamPageComponent } from './our-team/our-team-page/our-team-page.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { RegisterPageComponent } from './auth-pages/register-page/register-page.component';
import { LoginPageComponent } from './auth-pages/login-page/login-page.component';
import { NotFoundPageComponent } from './home/not-found-page/not-found-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { AddOfferPageComponent } from './add-offer/add-offer-page/add-offer-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'services', component: SurvicesPageComponent},
  {path: 'booking', component: BookingPageComponent},
  {path: 'our-team', component: OurTeamPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'profile/:profileId', component: ProfilePageComponent},
  {path: 'add-offer', component: AddOfferPageComponent},
  {path: '**', component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
