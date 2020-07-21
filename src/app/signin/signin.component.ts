import { AuthService } from './../core/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
        () => this.router.navigate(['products']),
        (err) => console.log(err)
      );
  }

}
