import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {animations} from '../common/animations/animation';
import {fromEvent, Observable, Observer, Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [animations]
})

export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('myInput') myInput: ElementRef;

  @ViewChild('myInput2') myInput2: FormControl;

  public animationState: string = 'incomplete';

  public items: Array<string> = ['text 1', 'text 2', 'text 3'];

  private valueChangesSubscription: Subscription;

  private componentDestroyed: Subject<string> = new Subject();

  constructor() {
  }

  ngOnInit() {
    const elem = this.myInput.nativeElement;
    // const o = fromEvent(elem, 'input');
    // o.pipe(
    //   debounceTime(500))
    //   .subscribe((event: KeyboardEvent) => console.log((event.target as HTMLInputElement).value));


    const o = Observable.create((observer: Observer<string>) => {
      observer.next('hello')
      observer.next('hello')
      observer.next('hello')
      observer.complete()
    })

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

  ngOnDestroy(){
    console.log('destroy home component');
    // this.valueChangesSubscription.unsubscribe();
    // this.componentDestroyed.next();//TODO without 'next' not work
    // this.componentDestroyed.unsubscribe();

  }


}
