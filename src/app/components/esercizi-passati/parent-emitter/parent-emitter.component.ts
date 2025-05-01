import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-emitter',
  standalone: false,
  templateUrl: './parent-emitter.component.html',
  styleUrl: './parent-emitter.component.scss',
})
export class ParentEmitterComponent {
  handlePurchase() {
    console.log('Acquistato');
  }
}
