import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-reciver',
  standalone: false,
  templateUrl: './submit-reciver.component.html',
  styleUrl: './submit-reciver.component.scss',
})
export class SubmitReciverComponent {
  nome: string | null = null;
  email: string | null = null;
  password: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.nome = params['nome'];
      this.email = params['email'];
      this.password = params['password'];
    });
  }
}
