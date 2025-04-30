import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payload-children',
  standalone: false,
  templateUrl: './payload-children.component.html',
  styleUrl: './payload-children.component.scss',
})
export class PayloadChildrenComponent {
  inputValue: string = '';

  @Output() valoreInviato = new EventEmitter<string>();

  inviaValore() {
    this.valoreInviato.emit(this.inputValue);
    this.inputValue = '';
  }
}
