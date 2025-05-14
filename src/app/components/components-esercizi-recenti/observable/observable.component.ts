import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: false,
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Marco');
    subscriber.complete();
  });

  names: string[] = [];

  observer = {
    next: (value: string) => console.log(value),
  };

  ngOnInit(): void {
    this.observable$.subscribe(this.observer);
  }
}
