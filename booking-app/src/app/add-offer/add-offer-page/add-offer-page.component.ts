import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-add-offer-page',
  templateUrl: './add-offer-page.component.html',
  styleUrls: ['./add-offer-page.component.css']
})
export class AddOfferPageComponent implements OnInit {

  addOfferHandler(form: NgForm): void {
    console.log(form.value)
  }

  
  amenities: string[] = ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'In-room Safe', 'Work Desk', 'Toiletries', 'Personal care', 'Coffee Kit', 'Free parking', 'Mobile Check-In', 'Pampered Pets', 'Kid Equipment', 'In-Room Cocktail Station', 'Fitness Tech', 'Arcade Games', 'Musical Instruments', 'Ironing Board', 'Iron', 'Bath Towel', 'Dental Kit', 'Shaving Kit'];
  galleryImages: string[] =[''];
  wifi: boolean = true;

  constructor(private store: Store) {}

  demo(stars: string): void {
    console.log(stars)
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Add Offer'}));
  }

}
