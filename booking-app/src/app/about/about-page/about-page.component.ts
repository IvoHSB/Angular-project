import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}))
    this.store.dispatch(changePage({value: 'About'}))
  }

}
