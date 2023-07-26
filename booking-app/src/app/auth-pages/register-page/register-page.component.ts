import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { registerForm } from './interfaces';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { registerBody, userDetailsData } from 'src/app/functionalityServices/authInterfaces';
import { setUser, setUserDetailsId } from 'src/app/store/actions/auth.action';
import { user } from 'src/app/store/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  haveError: boolean = false;
  errorMessage: string = '';
  user: any;

  constructor(private _authService: AuthService, private store: Store, private router: Router) { }

  registerHandler(form: NgForm): void {

    this.haveError = false;

    let emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let formValue: registerForm = form.value;

    if (!emailRegx.test(formValue.email)) {
      this.haveError = true;
      this.errorMessage = 'Invalid email!';
    } else if (formValue.password !== formValue.confirm_password) {
      this.haveError = true;
      this.errorMessage = 'Password mismatch!';
    } else if (formValue.password.length < 9) {
      this.haveError = true;
      this.errorMessage = 'Password min length is 9 character!';
    } else if (formValue.name.length < 3) {
      this.haveError = true;
      this.errorMessage = 'Name min length is 3 character!';
    } else if (!formValue.img.startsWith('http://') && !formValue.img.startsWith('https://')) {
      this.haveError = true;
      this.errorMessage = 'Image must start with "http://" or "https://"!';
    } else if (formValue.phone === '') {
      this.haveError = true;
      this.errorMessage = 'Phone field is required!';
    } else if (formValue.country === '' || formValue.city === '') {
      this.haveError = true;
      this.errorMessage = 'Location fields is required!';
    }

    const registerBody: registerBody = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      country: formValue.country,
      city: formValue.city,
      phone: formValue.phone,
      img: formValue.img,
    }

    const userDetails: userDetailsData = {
      name: formValue.name,
      email: formValue.email,
      country: formValue.country,
      city: formValue.city,
      phone: formValue.phone,
      img: formValue.img,
    }

    if (!this.haveError) {
      this._authService.register(registerBody).subscribe(
        res => {
          this.haveError = false;
          this.user = res;
          this.store.select(user).subscribe((p: any) => {
            if (p) {
              this._authService.addUserDetails(userDetails, p.accessToken).subscribe(
                (response: any) => {
                  this.store.dispatch(setUserDetailsId({value: response._id}));

                  this.router.navigate([`/profile/${response._id}`]);
                },
                err => {
                  this.haveError = true;
                  this.errorMessage = err.error.message;
                } 
              )
            }
          })
          this.store.dispatch(setUser({value: res}));
        },
        err => {
          this.haveError = true;
          this.errorMessage = err.error.message;
        })
    }
  }

  demo(): void {
    console.log(this.store.select(user));
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Register' }));
  }

}
