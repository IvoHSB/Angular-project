import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RegisterPageComponent, LoginPageComponent]
})
export class AuthPagesModule { }
