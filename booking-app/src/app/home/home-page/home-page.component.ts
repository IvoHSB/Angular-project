import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: true}))
    this.store.dispatch(changePage({value: 'Home'}))
  }
}
