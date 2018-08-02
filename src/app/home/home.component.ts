import {Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {animations} from '../common/animations/animation';
import {fromEvent, Observable, Observer, Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    private transferState: TransferState,
  ) {
  }

  ngOnInit() {

    const TESTDATA_KEY = makeStateKey('testData');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
      })
    };


    if (isPlatformServer(this.platformId)) {

      console.log(1);

      this.http.get('http://localhost:8080/user/testdata2', httpOptions).subscribe(response => {
        console.log(response);
        this.data = response;
        this.transferState.set(TESTDATA_KEY, this.data);
      });
    } else{

      console.log(2);
      if (this.transferState.hasKey(TESTDATA_KEY)) {
        console.log(3);
        this.data = this.transferState.get(TESTDATA_KEY, null);
        this.transferState.remove(TESTDATA_KEY);

      } else{
        console.log(4);

        this.http.get('http://localhost:8080/user/testdata2', httpOptions).subscribe(response => {
          console.log(response);
          this.data = response;
        });

      }

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
