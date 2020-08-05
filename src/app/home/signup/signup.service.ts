import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewUser } from './new-user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SignupService {
  public apiSignup = environment.apiUrl + '/auth/signup';
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
