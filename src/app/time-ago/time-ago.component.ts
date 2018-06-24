import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['./time-ago.component.css']
})
export class TimeAgoComponent implements OnInit {

  public timeNow: number;
  public prevTime: number;

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.prevTime = moment().valueOf();
    setInterval(() => {
      this.timeNow = this.prevTime;
    }, 1000);
  }

  goDashboard(): void {
    // this._router.navigate(['dashboard']);
    this._router.navigate([{ outlets: { primary: 'dashboard', time: ['dashboard'] } }]);
  }

}
