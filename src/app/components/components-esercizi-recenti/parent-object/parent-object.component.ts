import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-object',
  standalone: false,
  templateUrl: './parent-object.component.html',
  styleUrl: './parent-object.component.scss',
})
export class ParentObjectComponent {
  utente = {
    nome: 'Luca',
    eta: 25,
  };
}
