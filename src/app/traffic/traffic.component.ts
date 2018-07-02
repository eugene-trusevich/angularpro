import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss']
})
export class TrafficComponent implements OnInit {

  public trafficLight: FormControl;


  constructor() {
  }

  ngOnInit() {
    // this.trafficLight.valueChanges.subscribe(value => console.log(value))
  }

}
