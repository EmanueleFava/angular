import { Component } from '@angular/core';

@Component({
  selector: 'app-payload-parent',
  standalone: false,
  templateUrl: './payload-parent.component.html',
  styleUrl: './payload-parent.component.scss',
})
export class PayloadParentComponent {
  messaggioRicevuto: string = '';

  aggiornaMessaggio(valore: string) {
    this.messaggioRicevuto = valore;
  }
}
