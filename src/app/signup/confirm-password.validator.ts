import { AbstractControl, FormGroup } from '@angular/forms';
// tslint:disable-next-line: typedef
export function ConfirmPasswordValidator(control: AbstractControl) {
  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;

  if (password === confirmPassword) {
    return null;
  }

  control.get('confirmPassword').setErrors({ confirmPasswordValidator: true });

}
