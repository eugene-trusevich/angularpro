import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FormComponent implements OnInit {

  @Input() expanded: string;
  @Output() public submitCallback: EventEmitter<any> = new EventEmitter();

  public submitted: boolean = false;
  public formModel: any = {};
  public simpleView: boolean = false;


  constructor() {}

  ngOnInit() {
    this.simpleView = (this.expanded === 'true');
  }

  public onSubmit(): void {
    this.submitted = true;
    this.submitCallback.emit(this.formModel);
  }

  public handleChangeView(): void {
    this.simpleView = !this.simpleView;
  }
}
