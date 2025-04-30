import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-object',
  standalone: false,
  templateUrl: './child-object.component.html',
  styleUrl: './child-object.component.scss',
})
export class ChildObjectComponent {
  @Input() utente!: { nome: string; eta: number };
}
