import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-controller',
  standalone: false,
  template: `
    <h2>Reactive form</h2>
    <input [formControl]="nomeControl" placeholder="nome" />
    <p>Nome input: {{ nomeControl.value }}</p>
  `,
  styleUrl: './form-controller.component.scss',
})
export class FormControllerComponent {
  nomeControl = new FormControl('');
}
