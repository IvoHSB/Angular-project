import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { page } from 'src/app/store/selectors/header.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page$ = this.store.select(page)

  constructor(private store: Store) {}

  ngOnInit(): void {
    
  }
}
