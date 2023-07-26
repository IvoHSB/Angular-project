import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/functionalityServices/auth.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user } from 'src/app/store/selectors/auth.selector';

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
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Profile'}));

    const id = this.location.path().split('/')[2];
    this._authService.getUserDetails(id).subscribe(
      res => {
        this.profile$ = res;
        console.log(res)
      }
    )

    this.store.select(user).subscribe((p: any) => this.user$ = p);
  }

}
