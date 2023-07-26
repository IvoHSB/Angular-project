import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { page } from 'src/app/store/selectors/header.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page$: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(page).subscribe(p => this.page$ = p)
  }
}
