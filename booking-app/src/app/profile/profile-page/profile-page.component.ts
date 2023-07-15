import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private store: Store, private router: Router) {}

  goToAddOfferPage() {
    this.router.navigate(['/add-offer'])
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Profile'}));
  }

}
