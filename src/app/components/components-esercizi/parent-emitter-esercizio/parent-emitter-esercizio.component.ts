import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-emitter-esercizio',
  standalone: false,
  templateUrl: './parent-emitter-esercizio.component.html',
  styleUrl: './parent-emitter-esercizio.component.scss',
})
export class ParentEmitterEsercizioComponent {
  isClicked = false;

  handleClick() {
    this.isClicked = true;
  }
}
