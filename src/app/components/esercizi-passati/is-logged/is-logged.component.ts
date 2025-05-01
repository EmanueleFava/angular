import { Component } from '@angular/core';

@Component({
  selector: 'app-is-logged',
  standalone: false,
  templateUrl: './is-logged.component.html',
  styleUrl: './is-logged.component.scss',
})
export class IsLoggedComponent {
  isLogged = true;
  // rimuove il component dal dom
}
