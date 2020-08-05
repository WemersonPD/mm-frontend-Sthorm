import { TokenService } from './../../core/token/token.service';
import { UserService } from './../../core/user/user.service';
import { AuthService } from './../../core/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  login(): void{
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(email, password)
      .subscribe(
        () => {
          this.userService.getUser()
            .subscribe(user => {
              if ( this.tokenService.hasToken && user.role === 'ADMIN') {
                this.router.navigate(['admin']);
              } else {
                this.router.navigate(['products']);
              }
            })
            .unsubscribe();
        },
        (err) => console.log(err)
      );
  }


}
