import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-emitter',
  standalone: false,
  templateUrl: './child-emitter.component.html',
  styleUrl: './child-emitter.component.scss',
})
export class ChildEmitterComponent {
  isClicked = false;
  @Output() purchase = new EventEmitter<void>();

  onPurchase() {
    this.isClicked = true;
    this.purchase.emit();
  }
}
