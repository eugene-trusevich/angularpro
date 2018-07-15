import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';

interface AppState{
  counter: number
}

@Component({
  selector: 'app-counter-store',
  templateUrl: './counter-store.component.html',
  styleUrls: ['./counter-store.component.scss']
})
export class CounterStoreComponent implements OnInit {

  counter = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(select('counter')).subscribe(counter => this.counter = counter);
  }

  up(){
    this.store.dispatch({type: 'increment'})
  }

  down(){
    this.store.dispatch({type: 'dencrement'})
  }


}
