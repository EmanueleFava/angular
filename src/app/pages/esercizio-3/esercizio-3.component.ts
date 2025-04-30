import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-esercizio-3',
  standalone: false,
  templateUrl: './esercizio-3.component.html',
  styleUrl: './esercizio-3.component.scss',
})
export class Esercizio3Component {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}
}
