import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { loginBody } from 'src/app/functionalityServices/authInterfaces';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  haveError: boolean = false;
  errorMessage: string = '';
  user: any;

  constructor(private _authService: AuthService, private store: Store) { }

  loginHandler(form: NgForm): void {

    this.haveError = false;

    let formValue: loginBody = form.value;

    if (formValue.email === '' || formValue.password === '') {
      this.haveError = true;
      this.errorMessage = 'All fields is required!';
    }

    if (!this.haveError) {
      this._authService.login(formValue).subscribe(
        res => {
          console.log(res)
          this.haveError = false;
          this.user = res;
        },
        err => {
          this.haveError = true;
          this.errorMessage = "Email or password don't match!";
        })
    }

  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Login' }));
  }
}
