import {Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {animations} from '../common/animations/animation';
import {fromEvent, Observable, Observer, Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {isPlatformBrowser} from '@angular/common';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const TESTDATA_KEY = makeStateKey('testData');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [animations]
})

export class HomeComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;

  @ViewChild('myInput2') myInput2: FormControl;

  public animationState: string = 'incomplete';

  public items: Array<string> = ['text 1', 'text 2', 'text 3'];

  public data: any;

  private valueChangesSubscription: Subscription;

  private componentDestroyed: Subject<string> = new Subject();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private state: TransferState
  ) {
  }

  ngOnInit() {

    this.data = this.state.get(TESTDATA_KEY, null as any);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      })
    };

    if(!this.data){

      this.http.get('http://localhost:8080/user/testdata2', httpOptions).subscribe(response => {
        console.log(response);
        this.data = response;
        this.state.set(TESTDATA_KEY, response as any);
      })
    }

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
