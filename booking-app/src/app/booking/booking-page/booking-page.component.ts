import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  offerCount: any = 0;
  pageSize = 6;
  currPage = 1;
  offers: any = false;
  haveOffers: boolean = true;

  constructor(private store: Store, private _bookingService: bookingService, private router: Router) { }

  openOffer(id: string) {
    this.router.navigate([`/booking/${id}`]);
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Booking' }));

    this._bookingService.getOfferCount().subscribe(res => {
      console.log(res)
      this.offerCount = res;
    },
      err => {
        console.log(0)
        this.offerCount = 0;
      }
    )

    this._bookingService.getOffersByPage(1).subscribe(res => {
      this.offers = res;
      console.log(res)
    },
      err => {
        console.log('No have avaiable')
      }
    )
  }
}
