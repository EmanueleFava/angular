import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error-complete',
  standalone: false,
  templateUrl: './error-complete.component.html',
  styleUrl: './error-complete.component.scss',
})
export class ErrorCompleteComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Marco');
    console.log('completed');
    subscriber.complete();
    subscriber.next('Dato non passato');
  });

  observableError$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Marco');
    subscriber.error();
    subscriber.next('Dato non passato');
  });

  names: string[] = [];

  ngOnInit(): void {
    this.observable$.subscribe({
      next: (value) => console.log('Dato:', value),
      complete: () => console.log('Observable completed!'),
    });
    this.observableError$.subscribe({
      next: (value) => console.log('Dato:', value),
      error: () => {
        throw new Error('Errore generato nel subscribe');
      },
    });
  }
}
