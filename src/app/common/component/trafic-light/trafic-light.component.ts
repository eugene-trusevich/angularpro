import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR,
  Validator, Validators
} from '@angular/forms';


type TLColor = 'green' | 'yellow' | 'red';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrafficLightComponent),
      multi: true
    }
  ]
})
export class TrafficLightComponent implements ControlValueAccessor {

  @Input() initialColor: TLColor;

  private currentColor: TLColor;
  private _onChangedCallback = (color: TLColor) => {
  };
  private _onTouchedCallback = (color: TLColor) => {
  };

  public colors: Array<TLColor> = ['red', 'yellow', 'green']

  public writeValue(color: TLColor): void {
    this.currentColor = color;
  }

  public registerOnChange(fn: (color: TLColor) => void): void {
    this._onChangedCallback = fn;
  }

  public registerOnTouched(fn: (color: TLColor) => void): void {
    this._onTouchedCallback = fn;
  }

  public radioChange(color: TLColor): void {
    this.currentColor = color;
    this._onChangedCallback(color);
    this._onTouchedCallback(color);
  }

  ngOnInit(): void {
    this.currentColor = this.initialColor && this.colors.includes(this.initialColor) ? this.initialColor : this.colors[0];
  }
}
