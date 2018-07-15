import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {createTrafficValidator} from '../common/directives/traffic-validator.directive';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss']
})
export class TrafficComponent implements OnInit {

  public formModel: FormGroup;
  public initialTrafficLight: string = 'red';

  constructor(
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formModel = this._fb.group({
      trafficLight: [this.initialTrafficLight, [createTrafficValidator('red')]]
    });

    // this.formModel.valueChanges.subscribe(value => console.log(value))
  }

  public onSubmit(value: any): void {
    console.log(value);
  }


}
