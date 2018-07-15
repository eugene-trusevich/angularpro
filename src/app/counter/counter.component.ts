import { Component, OnInit } from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;
  subscriberIndex = 0;
  subscribersValues = [];
  // subject = new Subject<number>();
  // subject = new BehaviorSubject<number>(0);
  // subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 1000);
  subject = new AsyncSubject<number>();

  emmitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);
    this.subject.subscribe(value => subscriberValues.push(value))
  }

  ngOnInit(){

  }

}
