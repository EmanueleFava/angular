import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-esercizio-4',
  standalone: false,
  templateUrl: './esercizio-4.component.html',
  styleUrl: './esercizio-4.component.scss',
})
export class Esercizio4Component {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}
}
