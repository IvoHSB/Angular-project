import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { loginBody } from 'src/app/functionalityServices/authInterfaces';
import { setUser, setUserDetailsId } from 'src/app/store/actions/auth.action';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  haveError: boolean = false;
  errorMessage: string = '';
  user: any = this.store.select(user);

  constructor(private _authService: AuthService, private store: Store,private router: Router) { }

  loginHandler(form: NgForm): void {

    this.haveError = false;

    let formValue: loginBody = form.value;

    if (formValue.email === '' || formValue.password === '') {
      this.haveError = true;
      this.errorMessage = 'All fields is required!';
    }

    if (!this.haveError) {
      this._authService.login(formValue).subscribe(
        (res: any) => {
          this.store.dispatch(setUser({value: res}));
          this._authService.getUserDetailsByOwnerId(res._id).subscribe((response: any) => {

            this.store.dispatch(setUserDetailsId({value: response[0]._id}));
            localStorage.setItem("user", "true");
            this.router.navigate([`/profile/${response[0]._id}`]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.haveError = false;
          },
          err => {
            this.haveError = true;
            this.errorMessage = err;
          })
          // console.log(res)
          // this.user = res;
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
