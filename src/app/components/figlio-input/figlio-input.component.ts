import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio-input',
  standalone: false,
  styleUrl: './figlio-input.component.scss',
  template: `<h2>{{ title }}</h2>`,
})
export class FiglioInputComponent {
  @Input() title!: string;
  //  la variabile è inizializzata altrove, cioè nel componente padre
}
