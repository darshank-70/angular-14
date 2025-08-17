import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _loggedIn$ = new BehaviorSubject<boolean>(false);
  _isLoggedIn$: Observable<boolean> = this._loggedIn$.asObservable();
  constructor() {}
  isLoggedInSync() {
    return this._loggedIn$.value;
  }
  login(_u: string, _p: string) {
    setTimeout(() => {
      this._loggedIn$.next(true);
    }, 1000);
  }
  logout() {
    setTimeout(() => {
      this._loggedIn$.next(false);
    });
  }
}
