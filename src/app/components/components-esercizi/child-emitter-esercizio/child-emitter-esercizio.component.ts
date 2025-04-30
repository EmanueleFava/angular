import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-emitter-esercizio',
  standalone: false,
  templateUrl: './child-emitter-esercizio.component.html',
  styleUrl: './child-emitter-esercizio.component.scss',
})
export class ChildEmitterEsercizioComponent {
  @Output() eventClick = new EventEmitter<void>();

  onClick() {
    this.eventClick.emit();
  }
}
