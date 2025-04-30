import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-params',
  standalone: false,
  templateUrl: './routing-params.component.html',
  styleUrls: ['./routing-params.component.scss'],
})
export class RoutingParamsComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('id ricevuto:', this.id);
    });
  }
}
