import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: false,
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.scss',
})
export class FormValidatorComponent {
  nomeControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
  });
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    this.gmailValidator,
    this.onlyLetterBeforeAt,
  ]);

  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@gmail.com')) {
      return { gmail: true };
    }
    return null;
  }

  onlyLetterBeforeAt(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email) {
      const parts = email.split('@');
      if (parts.length > 1) {
        const localPart = parts[0];
        const onlyLettersRegex = /^[a-zA-Z]+S/;
        if (!onlyLettersRegex.test(localPart)) {
          return { onlyLetters: true };
        }
      }
    }
    return null;
  }
}
