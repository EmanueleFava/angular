import { Component } from '@angular/core';

@Component({
  selector: 'app-class-btn',
  standalone: false,
  templateUrl: './class-btn.component.html',
  styleUrl: './class-btn.component.scss',
})
export class ClassBtnComponent {
  isActive = true;
}
