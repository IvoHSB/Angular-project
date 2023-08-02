import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  obj: bookingOffers = {
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

  addOfferHandler(form: any) {

  }

  ngOnInit(): void {

    const id = this.location.path().split('/')[2];

    this.store.select(user).subscribe((p: any) => {
      this.user = p;
      if (this.user && this.room) {
        if (this.user._id !== this.room._ownerId) {
          this.router.navigate([`/404`]);
        }
      }

    });

    this._bookingService.getOfferById(id).subscribe(r => {
      this.room = r;
      console.log(this.room)
      if (this.user && this.room) {
        if (this.user._id !== this.room._ownerId) {
          this.router.navigate([`/404`]);
        }
      }
    })
  }
}
