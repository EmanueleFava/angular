import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  standalone: false,
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss',
})
export class ParentComponentComponent {
  titolo = 'Bevenuto!';
}
