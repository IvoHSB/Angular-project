import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user } from 'src/app/store/selectors/auth.selector';
import { setUser, setUserDetailsId } from 'src/app/store/actions/auth.action';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  profile$: any = null;
  user$: any = null;
  offers: any = null;

  constructor(private store: Store, private router: Router, private _authService: AuthService, private _bookingService: bookingService, private location: Location) { }

  subscription: Subscription;

  goToAddOfferPage() {
    this.router.navigate(['/add-offer'])
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  logout() {
    this._authService.logout(this.user$.accessToken).subscribe(res => {
      // this.user$ = null;
      // this.profile$ = null;
      this.store.dispatch(setUser({ value: null }));
      this.store.dispatch(setUserDetailsId({ value: null }));
      localStorage.clear();

      this.router.navigate([`/`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
      err => {
        console.log(err)
      }
    )
  }

  openOffer(id: string) {
    this.router.navigate([`/booking/${id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Profile' }));

    const id = this.location.path().split('/')[2];

    this._authService.getUserDetails(id).subscribe(
      (res: any) => {
        this.profile$ = res;
        this._bookingService.getOfferByOwner(res.email).subscribe(res => {
          this.offers = res;
        },
          err => {
            this.offers = [];
            console.log('No have avaiable');
          }
        )
      },
      err => {
        this.router.navigate([`/`]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    )

    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let newId = event.url.split('/')[2];
        this._authService.getUserDetails(newId).subscribe(
          (res: any) => {
            this.profile$ = res;
            this._bookingService.getOfferByOwner(res.email).subscribe(res => {
              this.offers = res;
            },
              err => {
                this.offers = [];
                console.log('No have avaiable');
              }
            )
          },
          err => {
            this.router.navigate([`/`]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        )
      }
    })

    this.store.select(user).subscribe((p: any) => this.user$ = p);


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
