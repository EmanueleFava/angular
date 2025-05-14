import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: false,
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent implements OnInit {
  intervals$ = new Observable<number>((subscriber) => {
    let counter = 1;

    const intervalId = setInterval(() => {
      console.log(`Emitted corretto: ${counter}`);
      subscriber.next(counter++);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });

  intervals2$ = new Observable<number>((subscriber) => {
    let counter = 1;

    const intervalId = setInterval(() => {
      console.log(`Emitted senza interruzioni: ${counter}`);
      subscriber.next(counter++);
    }, 2000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  });

  ngOnInit(): void {
    const subscription = this.intervals$.subscribe((value) =>
      console.log(`subscription 1: ${value}`)
    );
    const subscription2 = this.intervals2$.subscribe((value) =>
      console.log(`subscription 2: ${value}`)
    );

    setTimeout(() => {
      console.log('Unsubscribe');
      subscription.unsubscribe();
      subscription2.unsubscribe();
    }, 7000);
  }
}
