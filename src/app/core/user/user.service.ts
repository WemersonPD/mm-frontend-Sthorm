import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

import { TokenService } from './../token/token.service';
import { TokenPayload } from './token-payload';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<TokenPayload>(null);
  constructor(
    private tokenService: TokenService,
  ) {
    if (this.tokenService.hasToken) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<TokenPayload> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    if (token) {
      const tokenPayload = jwtDecode(token) as TokenPayload;
      this.userSubject.next(tokenPayload);
    }
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }
}
