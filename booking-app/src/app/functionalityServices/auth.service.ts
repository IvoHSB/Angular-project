import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerBody } from './authInterfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http: HttpClient) { }

  register(data: registerBody) {
    return this._http.post('http://localhost:3030/users/register', JSON.stringify(data));
  }
}
