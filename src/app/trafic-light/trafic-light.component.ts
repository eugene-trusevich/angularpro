import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  public user: FormControl = new FormControl();
  public fullName: FormGroup = new FormGroup({

  });

  constructor() {

  }

  ngOnInit() {

    this.user.valueChanges.subscribe(console.log)
  }

}
