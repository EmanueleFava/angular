import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-component',
  standalone: false,
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.scss',
})
export class AboutComponentComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('QueryParam ref:', params['ref']);
    });
  }

  goToHome() {
    this.router.navigate([''], {
      queryParams: { ref: "query passata dall'about" },
    });
  }
}
