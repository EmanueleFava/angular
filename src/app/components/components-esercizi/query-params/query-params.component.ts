import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  standalone: false,
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.scss',
})
export class QueryParamsComponent {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log('id ricevuto:', this.id);
    });
  }
}
