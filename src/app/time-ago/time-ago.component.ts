import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-ago',
  templateUrl: './time-ago.component.html',
  styleUrls: ['./time-ago.component.css']
})
export class TimeAgoComponent implements OnInit {

  public timeNow: number;
  public prevTime: number;

  constructor() {
  }

  ngOnInit() {
    this.prevTime = moment().valueOf();
    setInterval(() => {
      this.timeNow = this.prevTime;
    }, 1000);
  }

}
