import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { bookingOffers } from 'src/app/functionalityServices/bookingInterfaces';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { user } from 'src/app/store/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer-page',
  templateUrl: './add-offer-page.component.html',
  styleUrls: ['./add-offer-page.component.css']
})
export class AddOfferPageComponent implements OnInit {
  
  haveError: boolean = false;
  errorMessage: string = '';
  user: any;
  

  amenities: string[] = ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'In-room Safe', 'Work Desk', 'Toiletries', 'Personal care', 'Coffee Kit', 'Free parking', 'Mobile Check-In', 'Pampered Pets', 'Kid Equipment', 'In-Room Cocktail Station', 'Fitness Tech', 'Arcade Games', 'Musical Instruments', 'Ironing Board', 'Iron', 'Bath Towel', 'Dental Kit', 'Shaving Kit'];
  stars: string = '';

  constructor(private _bookinService: bookingService, private store: Store, private router: Router) {}

  setStars(stars: string): void {
    this.stars = stars;
  }

  addOfferHandler(form: NgForm): void {

    this.haveError = false;

    let formValue: any = form.value;

    formValue.stars = this.stars;

    if (formValue.name === '') {
      this.haveError = true;
      this.errorMessage = 'Room name field is required!';
    } else if (formValue.name.length < 3) {
      this.haveError = true;
      this.errorMessage = 'Min name length is 3 characters!';
    } else if (formValue.description === '') {
      this.haveError = true;
      this.errorMessage = 'Description field is required!';
    } else if (!formValue.image.startsWith('http://') && !formValue.image.startsWith('https://')) {
      this.haveError = true;
      this.errorMessage = 'Image must start with "http://" or "https://"!';
    } else if (formValue.city === '') {
      this.haveError = true;
      this.errorMessage = 'City field is required!';
    } else if (formValue.country === '') {
      this.haveError = true;
      this.errorMessage = 'Country field is required!';
    } else if (formValue.people === '') {
      this.haveError = true;
      this.errorMessage = 'Occupancy field is required!';
    } else if (Number(formValue.people) <= 0) {
      this.haveError = true;
      this.errorMessage = 'Occupancy field must be a bigger than 0!';
    } else if (formValue.bath === '') {
      this.haveError = true;
      this.errorMessage = 'Num of bath field is required!';
    } else if (Number(formValue.bath) <= 0) {
      this.haveError = true;
      this.errorMessage = 'Num of bath field must be a bigger than 0!';
    } else if (formValue.size === '') {
      this.haveError = true;
      this.errorMessage = 'Size in sqm field is required!';
    } else if (Number(formValue.size) <= 0) {
      this.haveError = true;
      this.errorMessage = 'Size in sqm field must be a bigger than 0!';
    } else if (this.stars !== '0' && this.stars !== '1' && this.stars !== '2' && this.stars !== '3' && this.stars !== '4' && this.stars !== '5') {
      this.haveError = true;
      this.errorMessage = 'Please select stars!';
    } else if (formValue.price === '') {
      this.haveError = true;
      this.errorMessage = 'Price field is required!';
    } else if (Number(formValue.price) <= 0) {
      this.haveError = true;
      this.errorMessage = 'Price field must be a bigger than 0!';
    }

    if (!this.haveError) {
      this._bookinService.addOffer(formValue, this.user.accessToken).subscribe((r: any) => {
        this.router.navigate([`/booking/${r._id}`]);
        console.log(r)
      }, 
      err => {
          this.haveError = true;
          this.errorMessage = 'We heva a problem, please try agayn later!';
      })
    console.log(form.value)
    }
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({value: false}));
    this.store.dispatch(changePage({value: 'Add Offer'}));

    this.store.select(user).subscribe(r => this.user = r)
  }

}
