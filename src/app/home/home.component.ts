import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animations} from '../common/animations/animation';
import {combineLatest, forkJoin, fromEvent, Observable, Observer, of, asyncScheduler} from 'rxjs';
import {debounceTime, mergeMap, observeOn, switchMap} from 'rxjs/internal/operators';
import {scheduler} from '@angular/elements/src/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [animations]
})

export class HomeComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;

  public animationState: string = 'incomplete';

  public items: Array<string> = ['text 1', 'text 2', 'text 3'];

  constructor() {
  }

  ngOnInit() {
    const elem = this.myInput.nativeElement;
    // const o = fromEvent(elem, 'input');
    // o.pipe(
    //   debounceTime(500))
    //   .subscribe((event: KeyboardEvent) => console.log((event.target as HTMLInputElement).value));

    //
    // const o = Observable.create((observer: Observer<string>) => {
    //   observer.next('hello')
    //   observer.next('hello')
    //   observer.next('hello')
    //   observer.complete()
    // })

    // const o1 = of(1,2, asyncScheduler);
    const o1 = of(1,2). pipe(observeOn(asyncScheduler));
    const o2 = of(10);
    const o = combineLatest(o1, o2)

    o.subscribe(console.log)

  }

  toggleAnimation(): void {
    this.animationState = this.animationState === 'incomplete' ? 'complete' : 'incomplete';
  }

  addItem(): void {
    this.items.push('text');
  }

  removeItem(index): void {
    this.items.splice(index, 1);
  }


}
