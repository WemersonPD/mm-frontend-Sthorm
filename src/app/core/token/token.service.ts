import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public key = 'authToken';

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    window.localStorage.setItem(this.key, token);
  }

  getToken(): string {
    return window.localStorage.getItem(this.key);
  }

  removeToken(): void {
    window.localStorage.removeItem(this.key);
  }
}
