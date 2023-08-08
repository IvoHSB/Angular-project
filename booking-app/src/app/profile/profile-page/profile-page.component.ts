import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user } from 'src/app/store/selectors/auth.selector';
import { setUser, setUserDetailsId } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profile$: any = null;
  user$: any = null;

  constructor(private store: Store, private router: Router, private _authService: AuthService, private location: Location) {}

  goToAddOfferPage() {
    this.router.navigate(['/add-offer'])
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  logout() {
    this._authService.logout(this.user$.accessToken).subscribe(res => {
      this.store.dispatch(setUser({value: null}));
      this.store.dispatch(setUserDetailsId({value: null}));
      localStorage.clear();
      this.router.navigate([`/`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    err => {
      console.log(err)
    }
    )
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Profile'}));

    const id = this.location.path().split('/')[2];
    this._authService.getUserDetails(id).subscribe(
      res => {
        this.profile$ = res;
        console.log(res)
      }, 
      err => {
        this.router.navigate([`/`]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    )

    this.store.select(user).subscribe((p: any) => this.user$ = p);
  }

}
