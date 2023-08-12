import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { bookingService } from 'src/app/functionalityServices/booking.service';
import { changeIsMainHeader, changePage } from 'src/app/store/actions/header.action';
import { user, userDetailsId } from 'src/app/store/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-room-page',
  templateUrl: './booking-room-page.component.html',
  styleUrls: ['./booking-room-page.component.css']
})
export class BookingRoomPageComponent implements OnInit {

  amenities: string[] = ['Free Wi-Fi', 'Air Conditioning', 'TV', 'Mini Bar', 'In-room Safe', 'Work Desk', 'Toiletries', 'Personal care', 'Coffee Kit', 'Free parking', 'Mobile Check-In', 'Pampered Pets', 'Kid Equipment', 'In-Room Cocktail Station', 'Fitness Tech', 'Arcade Games', 'Musical Instruments', 'Ironing Board', 'Iron', 'Bath Towel', 'Dental Kit', 'Shaving Kit'];
  isOpenRemoveDialog: boolean = false;

  isAlertOpen: boolean = false;
  room: any = false;
  user: any = false;
  profileId: any = null;
  reviewContent: string = '';
  reviews: any = null;

  constructor(private _bookingService: bookingService, private store: Store, private location: Location, private router: Router) { }

  editOffer(): void {
    this.router.navigate([`/edit/${this.room._id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeDialog() {
    this.isOpenRemoveDialog = false;
  }

  openRemoveDialog() {
    this.isOpenRemoveDialog = true;
  }

  changeReviewContent(content: string) {
    this.reviewContent = content;
  }

  postReview() {
    this._bookingService.postReview({ content: this.reviewContent, ownerName: this.user.name, profileId: this.profileId, offerId: this.room._id }, this.user.accessToken).subscribe(
      res => {
        let textArea: any = document.getElementById('review');
        textArea.value = '';
        this._bookingService.getReviewsByOfferId(this.location.path().split('/')[2]).subscribe((r: any) => {
          this.reviews = r.reverse();
        },
          err => {
            this.reviews = [];
          }
        )
      },
      err => {

      }
    );
  }

  openProfile(id: string) {
    this.router.navigate([`/profile/${id}`]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  booking() {
    this.isAlertOpen = true;
    setTimeout(() => {
      this.router.navigate([`/booking`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 5000)
  }

  removeOffer() {
    this._bookingService.deleteOffer(this.user.accessToken, this.room._id).subscribe(r => {
      this.router.navigate([`/profile/${this.profileId}`]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, err => {
      console.log(err)
    })
  }

  deleteReview(id: string) {
    this._bookingService.deleteReview(id, this.user.accessToken).subscribe(r => {
      this._bookingService.getReviewsByOfferId(this.location.path().split('/')[2]).subscribe((r: any) => {
        this.reviews = r.reverse();
      },
        err => {

        }
      )
    },
      err => {

      }
    )
  }

  ngOnInit(): void {
    this.store.dispatch(changeIsMainHeader({ value: false }));
    this.store.dispatch(changePage({ value: 'Room Details' }));

    const id = this.location.path().split('/')[2];

    this.store.select(user).subscribe((p: any) => this.user = p);

    this._bookingService.getOfferById(id).subscribe(r => {
      this.room = r;
    })

    this._bookingService.getReviewsByOfferId(id).subscribe((r: any) => {
      this.reviews = r.reverse();

    },
      err => {
        this.reviews = [];
      }
    )

    this.store.select(userDetailsId).subscribe((p: any) => this.profileId = p);
  }
}
