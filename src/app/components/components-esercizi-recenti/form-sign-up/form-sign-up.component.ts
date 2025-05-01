import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/User';

@Component({
  selector: 'app-form-sign-up',
  standalone: false,
  templateUrl: './form-sign-up.component.html',
  styleUrl: './form-sign-up.component.scss',
})
export class FormSignUpComponent {
  constructor(private router: Router) {}
  registrationForm = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        this.gmailValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.passwordMatchValidator }
  );

  submitted = false;

  get nome() {
    return this.registrationForm.get('nome');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submitted = true;
      const formValues = this.registrationForm.value;
      const user: User = {
        nome: formValues.nome ?? '',
        email: formValues.email ?? '',
        password: formValues.password ?? '',
      };
      const users = JSON.parse(localStorage.getItem('signedUsers') || '[]');
      const newUsers = [...users, user];
      localStorage.setItem('signedUsers', JSON.stringify(newUsers));
      this.router.navigate(['/login']);
    }
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { gmail: true };
    }
    return null;
  }
}
