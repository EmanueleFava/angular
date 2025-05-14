import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-double-subscription',
  standalone: false,
  templateUrl: './double-subscription.component.html',
  styleUrl: './double-subscription.component.scss',
})
export class DoubleSubscriptionComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    subscriber.next('Alice');
    subscriber.next('Marco');
    setTimeout(() => subscriber.next('Giovanni'), 2000);
    setTimeout(() => subscriber.next('Francesca'), 4000);
    subscriber.complete();
  });
  ngOnInit(): void {
    const subscription = this.observable$.subscribe((value: string) =>
      console.log(`subscription 1: ${value}`)
    );

    setTimeout(() => {
      const subscription2 = this.observable$.subscribe((value: string) =>
        console.log(`subscription 2: ${value} dopo un secondo`)
      );
    }, 1000);
  }
}
