import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-add-offer-page',
  templateUrl: './add-offer-page.component.html',
  styleUrls: ['./add-offer-page.component.css']
})
export class AddOfferPageComponent implements OnInit {


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Add Offer'}));
  }

}
