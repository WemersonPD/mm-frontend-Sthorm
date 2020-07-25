import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public passWord: AbstractControl;
  public passwordConfirmation: AbstractControl;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required, Validators.maxLength(12)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: ConfirmPasswordValidator
      }
    );
  }

  signup(): void {
    const newUser = this.signupForm.getRawValue() as NewUser;
    const { email, userName, password, confirmPassword} = newUser;
    this.signupService.signup(email, userName, password, confirmPassword)
      .subscribe(() => this.router.navigate(['']))
  }
}
