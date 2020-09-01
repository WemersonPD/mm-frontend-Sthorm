import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from './../user/user.service';
import { User } from './user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiAuth = environment.apiUrl + '/auth';
  public user: User;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(email: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>(this.apiAuth + '/signin', { email, password })
      .pipe(
        tap((resp) => {
          const token = resp.token;
          this.userService.setToken(token);
        })
      );
  }
}
