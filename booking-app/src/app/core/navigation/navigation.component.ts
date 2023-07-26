import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { user } from 'src/app/store/selectors/auth.selector';
import { registerBody } from 'src/app/functionalityServices/authInterfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  activePage: String = "home";
  user$: any;

  constructor(private location: Location, private store: Store ) {}

  changeActivePage(page: String): void {
    this.activePage = page;
  }

  ngOnInit(): void {
    this.store.select(user).subscribe((p: any) => this.user$ = p);
    
    if (this.location.path() === '') {
      this.activePage = 'home';
    } else {
      this.activePage = this.location.path().split('/')[1];
    }

  }
}
