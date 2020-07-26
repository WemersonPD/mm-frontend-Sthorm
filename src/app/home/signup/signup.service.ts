import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public apiSignup = 'http://localhost:3000/auth/signup';
  constructor(private http: HttpClient) {}

  signup(
    email: string,
    userName: string,
    password: string,
    passwordConfirmation: string
  ): Observable<NewUser> {
    return this.http
      .post<NewUser>(
        this.apiSignup,
        {name: userName, email, password, passwordConfirmation});
  }
}
