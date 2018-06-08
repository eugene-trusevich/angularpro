import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';


@Injectable()
export class UserService {

  private userRole = new BehaviorSubject<string>('admin');

  getUserRole(): Observable<string> {
    return this.userRole.asObservable();
  }
}
