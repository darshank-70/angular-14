import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _loggedIn = false;

  constructor() {}
  isLoggedIn() {
    return this._loggedIn;
  }
  login(_u: string, _p: string) {
    setTimeout(() => {
      this._loggedIn = true;
    }, 1000);
  }
  logout() {
    setTimeout(() => {
      this._loggedIn = false;
    });
  }
}
