import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-esercizio-5',
  standalone: false,
  templateUrl: './esercizio-5.component.html',
  styleUrl: './esercizio-5.component.scss',
})
export class Esercizio5Component {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}
}
