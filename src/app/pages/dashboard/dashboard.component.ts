import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  template: ` <h2>Benvenuto nella Dashboard {{ username }}</h2> `,
  standalone: false,
})
export class DashboardComponent {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}

  username: string = '';

  ngOnInit() {
    this.username = this.auth.getUsername();
  }
}
