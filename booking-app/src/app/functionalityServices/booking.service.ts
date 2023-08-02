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

    editOffer(data: any, token: string, id: string) {
        return this._http.put(`${this.bookingOffersURL}/${id}`, data, {
            headers: { 'X-Authorization': token, 'Content-Type': 'application/json' },
        });
    }

    deleteOffer(token: string, id: string) {
        return this._http.delete(`${this.bookingOffersURL}/${id}`, {
            headers: { 'X-Authorization': token },
        });
    }

    getOfferById(id: string) {
        return this._http.get(`${this.bookingOffersURL}/${id}`);
    }

    getOfferCount() {
        return this._http.get(`${this.bookingOffersURL}?count`);
    }

    getOffersByPage(page: number) {
        let offset = (page * 6) - 6;
        return this._http.get(`${this.bookingOffersURL}?offset=${offset}&pageSize=6`);
    }
}