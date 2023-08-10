import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { bookingOffers } from 'src/app/functionalityServices/bookingInterfaces';
import { user } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-edit-offer-page',
  templateUrl: './edit-offer-page.component.html',
  styleUrls: ['./edit-offer-page.component.css']
})
export class EditOfferPageComponent implements OnInit {

  obj: any = {
    'Air Conditioning': false,
    'Arcade Games': false,
    'Bath Towel': false,
    'Coffee Kit': false,
    'Dental Kit': false,
    'Fitness Tech': false,
    'Free Wi - Fi': false,
    'Free parking': false,
    'In - Room Cocktail Station': false,
    'In - room Safe': false,
    'Iron': false,
    'Ironing Board': false,
    'Kid Equipment': false,
    'Mini Bar': false,
    'Mobile Check - In': false,
    'Musical Instruments': false,
    'Pampered Pets': false,
    'Personal care': false,
    'Shaving Kit': false,
    'TV': false,
    'Toiletries': false,
    'Work Desk': false,
    stars: 'string',
    bath: 'string',
    city: 'string',
    country: 'string',
    description: 'string',
    image: 'string',
    name: 'string',
    people: 'string',
    price: 'string',
    size: 'string',
  }

  haveError: boolean = false;
  errorMessage: string = '';

  amenities: string[] = ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'In-room Safe', 'Work Desk', 'Toiletries', 'Personal care', 'Coffee Kit', 'Free parking', 'Mobile Check-In', 'Pampered Pets', 'Kid Equipment', 'In-Room Cocktail Station', 'Fitness Tech', 'Arcade Games', 'Musical Instruments', 'Ironing Board', 'Iron', 'Bath Towel', 'Dental Kit', 'Shaving Kit'];
  stars: string = '';

  user: any = false;
  room: any = false;

  constructor(private store: Store, private location: Location, private _bookingService: bookingService, private router: Router) {}

  updateAmenities(amenitie: string) {
    this.room[amenitie] = !this.room[amenitie];
  }

  setStars(stars: string): void {
    this.stars = stars;
    this.room.stars = stars;
  }

  addOfferHandler(form: NgForm) {

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

      formValue.ownerName = this.room.ownerName;
      formValue.ownerEmail = this.room.ownerEmail;
      formValue.ownerProfile = this.room.ownerProfile;

      this._bookingService.editOffer(formValue, this.user.accessToken, this.room._id).subscribe((r: any) => {
        this.router.navigate([`/booking/${r._id}`]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 
      err => {
        this.haveError = true;
        this.errorMessage = 'We heve a problem, please try again later!';
      })
    }
  }

  ngOnInit(): void {

    const id = this.location.path().split('/')[2];

    this.store.select(user).subscribe((p: any) => {
      this.user = p;
      this.obj = Object.assign({}, p);
      if (this.user && this.room) {
        if (this.user._id !== this.room._ownerId) {
          this.router.navigate([`/404`]);
        }
      }

    });

    this._bookingService.getOfferById(id).subscribe((r: any) => {
      this.room = r;
      this.stars = r.stars;
      if (this.user && this.room) {
        if (this.user._id !== this.room._ownerId) {
          this.router.navigate([`/404`]);
        }
      }
    })
  }
}
