import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookingOffers } from './bookingInterfaces';

@Injectable({
    providedIn: 'root'
})

export class bookingService {
    bookingOffersURL: string = 'http://localhost:3030/data/bookingOffers';

    constructor(private _http: HttpClient) { }

    addOffer(data: bookingOffers, token: string) {
        return this._http.post(`${this.bookingOffersURL}`, data, {
            headers: { 'X-Authorization': token, 'Content-Type': 'application/json' },
        });
    }

    getOfferById(id: string) {
        return this._http.get(`${this.bookingOffersURL}/${id}`);
    }
}