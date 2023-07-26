import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { isMainHeader } from './store/selectors/header.selector';
import { changeIsMainHeader } from './store/actions/header.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'booking-app';
  isMainHeader$: any;

  constructor(private location: Location, private store: Store) {}

  scrollToTop(): void {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.store.select(isMainHeader).subscribe(p => this.isMainHeader$ = p);
  }
}
