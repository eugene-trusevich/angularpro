import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private widgetsData = [
    {
      name: 'child1',
    },
    {
      name: 'child2'
    },
    {
      name: 'child5'
    },
    {
      name: 'child4'
    },
    {
      name: 'child3'
    }
  ]

  getWidgets(): Observable<any> {
    return of(this.widgetsData).pipe(delay(1000));
  }
}
