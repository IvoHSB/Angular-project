import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  offerCount: any = [];
  pageSize = 6;
  currPage = 1;
  offers: any = false;

  user: any;

  constructor(private store: Store, private _bookingService: bookingService, private router: Router) { }

  addOffer() {
    if (this.user) {
      this.router.navigate([`/add-offer`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate([`/login`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openOffer(id: string) {
    this.router.navigate([`/booking/${id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openPage(page: any) {
    this.offers = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._bookingService.getOffersByPage(page).subscribe(res => {
      this.offers = res;
    },
      err => {
        console.log('No have avaiable');
      }
    )
    this.currPage = page;
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Booking' }));

    this.store.select(user).subscribe((p: any) => this.user = p);

    this._bookingService.getOfferCount().subscribe(res => {

      if (Number(res) > this.pageSize) {
        for (let i: number = this.pageSize; i <= Number(res); i += 6) {
          this.offerCount.push(i / this.pageSize);
        }

        if (Number(res) % this.pageSize !== 0) {
          this.offerCount.push(this.offerCount[this.offerCount - 1] + 1);
        }
      } else {
        this.offerCount = false;
      }

    },
      err => {
        console.log(0)
        this.offerCount = 0;
      }
    )

    this._bookingService.getOffersByPage(1).subscribe(res => {
      this.offers = res;
    },
      err => {
        this.offers = [];
        console.log('No have avaiable');
      }
    )
  }
}
