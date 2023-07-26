import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginBody, registerBody, userDetailsData } from './authInterfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authUrl: string = 'http://localhost:3030/users/';

  constructor(private _http: HttpClient) { }

  register(data: registerBody) {
    return this._http.post(`${this.authUrl}register`, JSON.stringify(data));
  }

  addUserDetails(data: userDetailsData, token: string) {
    return this._http.post('http://localhost:3030/data/userDetails', data, {
      headers: {'X-Authorization': token, 'Content-Type': 'application/json'},
    })
  }

  login(data: loginBody) {
    return this._http.post(`${this.authUrl}login`, JSON.stringify(data));
  }
}
