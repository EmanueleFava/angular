import { Component } from '@angular/core';

@Component({
  selector: 'app-list-parent',
  standalone: false,
  templateUrl: './list-parent.component.html',
  styleUrl: './list-parent.component.scss',
})
export class ListParentComponent {
  prodotti = [{ nome: 'Mouse' }, { nome: 'Tastiera' }, { nome: 'Monitor' }];

  carrello: { nome: string }[] = [];

  aggiungiAlCarrello(prodotto: { nome: string }) {
    this.carrello.push(prodotto);
    console.log('Carrello attuale:', this.carrello);
  }
}
