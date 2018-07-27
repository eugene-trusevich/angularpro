import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {animations} from '../common/animations/animation';
import {
  fromEvent, Observable, Observer, of, from, throwError, empty, range,
  timer, interval, Subject, BehaviorSubject, forkJoin, Subscription
} from 'rxjs';
import {debounceTime, finalize, first, map, last, filter, single, debounce, distinctUntilChanged,
  throttle, throttleTime, audit, auditTime,
  skip, skipLast, skipUntil, skipWhile,
  take, takeLast, takeUntil, takeWhile,
  combineLatest, zip,
  concat, merge,
  startWith, withLatestFrom,
  pairwise, race} from 'rxjs/operators';
import {Form, FormControl, FormControlName} from '@angular/forms';
import {
  tap, delay, delayWhen, pluck, reduce, scan, groupBy, toArray, mergeMap, switchMap, flatMap, exhaustMap,
  catchError, retry, retryWhen, timeout,
  multicast, publish, share, shareReplay
} from 'rxjs/internal/operators';


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
    // const o = Observable.create((observer: Observer<string>) => {
    //   observer.next('hello')
    //   observer.next('hello')
    //   observer.next('hello')
    //   observer.complete()
    // })

    // const o = of('6' ,' 3');
    // const o = from(['6' ,'3']);
    // const o = from(Promise.resolve());

    // const o = throwError('my error')
    // const o = empty()
    // const o = range(1,10)
    // const o = timer(3000,1000)
    // const o = interval(1000)

    // .subscribe({
    //   next: (value: string | number) => {
    //     console.log('Next', value)
    //   },
    //   complete: () => console.log('Complete'),
    //   error: (error) => console.log('Error', error)
    // });


    //---------------------------
    // const o = new BehaviorSubject<number | string>(3);
    // o.next(1);
    // o.next(4);
    // не выведется
    //BehaviorSubject выведеьтся последний next

    // o.pipe(
    //   finalize(() => {
    //     console.log('finalize!!!');
    //   }),
    //   map(v => {
    //     console.log(v);
    //     if(v === 2){
    //       throw  new Error('qqq')
    //     }
    //     return v;
    //   }))
    //
    //   .subscribe({
    //     next: (value: string | number) => {
    //       // console.log('Next', value);
    //     },
    //     complete: () => console.log('Complete'),
    //     error: (error) => console.log('Error', error)
    //   });
    //
    //
    // o.next(2);
    // o.complete();
    // o.next(2);


    // выведетсья только 2, потому что Subject Hot

    // Cold & Hot

    //Cold (Youtube) -> включили ролик, и он начнетсья с начала,
    //Hot (TV) -> середина фильма, снова никт оне включит (Subject, formEvent)
    // например хочу получать данные в какойто момент, (mousemove)  а не на старте

    //Hot если мы передали и подписались то получим данные толкьо после подписки на них
    //---------------------------

    // фильтрация
    //     const o = interval(1000)
    //     const o = range(1,10)
          // .pipe(first())
          // .pipe(last())
          // .pipe(single(number => !!(number % 2)));
          // .pipe(filter(number => !(number % 2)));
          // .pipe(take(3));
          // .pipe(skip(3));
          // .pipe(takeUntil(timer(3000)));
          // .pipe(skipUntil(timer(3000)));
          // .pipe(skipUntil(timer(3000)));
          // .pipe(takeLast(2));
          // .pipe(last());




        // o.subscribe({
        //   next: (value: string | number) => console.log('Next', value),
        //   complete: () => console.log('Complete'),
        //   error: (error) => console.log('Error', error)
        // });
    //
    // const o1 = timer(1000, 1000).pipe(take(3));
    // const o2 = timer(2000, 4000).pipe(take(3));
    // const o3 = timer(3000, 4000).pipe(take(3));

    // const o = o1.pipe(combineLatest(o2, o3))
    // const o = o1.pipe(zip(o2, o3))
    // const o = forkJoin(o1, o2, o3)
    // const o = o1.pipe(merge(o2, o3))
    // const o = o1.pipe(startWith(555))
    // const o = o1.pipe(withLatestFrom(interval(500)))
    // const o = o1.pipe(pairwise())
    // const o = o1.pipe(race(o2, o3))


    // o.subscribe({
    //   // next: (value: number[]) => console.log('Next', value),
    //   next: (value: number) => console.log('Next', value),
    //   complete: () => console.log('Complete'),
    //   error: (error) => console.log('Error', error)
    // });

    //-----------------------
    //utility


    // const o = of(5, 4, 3).pipe(tap((number)=>{
    //   console.log(number);// то, что не связяно с данными(потоком)
    // }));

    // const o = of(5, 4, 3).pipe(delay(2000), finalize(()=>{
    //   console.log('finalize!');
    // }))
    //
    //
    // .subscribe({
    //   // next: (value: number[]) => console.log('Next', value),
    //   next: (value: number) => console.log('Next', value),
    //   complete: () => console.log('Complete'),
    //   error: (error) => console.log('Error', error)
    // });


    // this.valueChangesSubscription = this.myInput2.valueChanges.subscribe(value=>{
    //   console.log('value', value);
    //   })

    // this.valueChangesSubscription = this.myInput2.valueChanges.pipe(takeUntil(this.componentDestroyed)).subscribe(value=>{
    //   console.log('value', value);
    // })

    // this.valueChangesSubscription = interval(1000).subscribe(value=>{
    //     console.log('value', value);
    //   })

    // this.valueChangesSubscription = interval(1000).pipe(takeUntil(this.componentDestroyed)).subscribe(value=>{
    //   console.log('value', value);
    //   })


    // const o = from([{name:'Bob', surname:'test'}, {name:'jack', surname:'test2'}, {name:'jack', surname:'test3'}]).pipe(
    //   pluck('name')
    // )
    const o = of(1,2,3,4,5).pipe(
      // reduce((total: number, current: number) => total + current)
      // scan((total: number, current: number) => total + current)
    )


    //-----------------------
    //map, transform

    // const o = from([{name:'Bob', surname:'test'}, {name:'jack', surname:'test2'}, {name:'jack', surname:'test3'}]).pipe(
    //   groupBy(item => item.name),mergeMap(group =>{
    //     return group.pipe(toArray())
    //   })
    // )

    // const o = fromEvent(document, 'click').pipe(
    //   // flatMap(_ => interval(1000))
    //   // mergeMap(_ => interval(1000))
    //   // switchMap(_ => interval(1000))
    // // exhaustMap(_ => interval(1000))
    // )
    //
    // o.subscribe({
    //   next: (value: any) => console.log('Next', value),
    //   complete: () => console.log('Complete'),
    //   error: (error) => console.log('Error', error)
    // });

    //------------------------
    //error handling

    // const o = of(5).pipe(
      // delay(3000), timeout(1000), catchError( error =>{
      //   console.log(error)
      //   return empty();
      // })
    //   tap(_=>console.log('-')), delay(3000), timeout(1000), retry(3)
    // )


/*    const o = interval(1000).pipe(
      flatMap(val =>{
        if(val > 3 ){
          return throwError('error > 3')
        }
        return of(val)
      }),
      retry(1),
      // catchError(val => of(false))
      // retryWhen(errorObservable => {
      //   return errorObservable.pipe(delay(3000))
      // })
    )*/

    //------------
    // multicast

    //COLD => HOT - multicast


   /* const o = interval(1000).pipe(
      tap(n =>console.log(n)),
      // share()
    )*/

    // o.subscribe()
    // o.subscribe()
    // o.subscribe()
    // o.subscribe({
    //   next: (value: any) => console.log('Next', value),
    //   complete: () => console.log('Complete'),
    //   error: (error) => console.log('Error', error)
    // });



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
