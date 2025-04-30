import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-esercizio-1',
  standalone: false,
  templateUrl: './esercizio-1.component.html',
  styleUrl: './esercizio-1.component.scss',
})
export class Esercizio1Component {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}
}
