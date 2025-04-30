import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('QueryParam ref:', params['ref']);
    });
  }

  goToAbout() {
    this.router.navigate(['/about'], {
      queryParams: { ref: 'query passata dalla home' },
    });
  }
}
