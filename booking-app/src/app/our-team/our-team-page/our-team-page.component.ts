import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-our-team-page',
  templateUrl: './our-team-page.component.html',
  styleUrls: ['./our-team-page.component.css']
})
export class OurTeamPageComponent implements OnInit {


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Our Team'}));
  }
}
