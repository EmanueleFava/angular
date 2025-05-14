import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-compatto',
  standalone: false,
  templateUrl: './observable-compatto.component.html',
  styleUrl: './observable-compatto.component.scss',
})
export class ObservableCompattoComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Marco');
    setTimeout(() => subscriber.next('Giovanni'), 2000);
    setTimeout(() => subscriber.next('Francesca'), 4000);
  });

  ngOnInit(): void {
    const subscription = this.observable$.subscribe((value: string) =>
      console.log(value)
    );

    setTimeout(() => {
      console.log('ususcribe');
      subscription.unsubscribe();
    }, 3000);
  }
}
