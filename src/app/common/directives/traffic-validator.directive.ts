import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

export function createTrafficValidator(forbiddenColor:string) {
  return function trafficValidator(control: FormControl){
    let err = {
      trafficLightError: {
        given: control.value,
        forbiddenColor: forbiddenColor
      }
    }
    return control.value !== err.trafficLightError.forbiddenColor ? null : err;
  }
}

@Directive({
  selector: '[appTrafficValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: createTrafficValidator,
      multi: true
    }
  ]
})
export class TrafficValidatorDirective {}
