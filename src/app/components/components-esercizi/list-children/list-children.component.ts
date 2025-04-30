import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-children',
  standalone: false,
  templateUrl: './list-children.component.html',
  styleUrl: './list-children.component.scss',
})
export class ListChildrenComponent {
  @Input() prodotti: { nome: string }[] = [];
  @Output() prodottoAggiunto = new EventEmitter<{ nome: string }>();

  onAggiungi(prodotto: { nome: string }) {
    this.prodottoAggiunto.emit(prodotto);
  }
}
