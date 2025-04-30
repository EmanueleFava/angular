import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-queries',
  standalone: false,
  templateUrl: './form-queries.component.html',
  styleUrl: './form-queries.component.scss',
})
export class FormQueriesComponent {
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
      console.log(this.registrationForm.value);
      this.router.navigate(['/submit-reciver'], {
        queryParams: {
          nome: formValues.nome,
          email: formValues.email,
          password: formValues.password,
        },
      });
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
