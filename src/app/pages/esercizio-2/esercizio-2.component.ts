import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-esercizio-2',
  standalone: false,
  templateUrl: './esercizio-2.component.html',
  styleUrl: './esercizio-2.component.scss',
})
export class Esercizio2Component {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}
}
