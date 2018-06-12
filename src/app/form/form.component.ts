import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public simpleView: boolean;
  @Output() public submitCallback: EventEmitter<any> = new EventEmitter();

  public submitted: boolean = false;
  public formModel: any = {};


  constructor(
    private elementRef: ElementRef
  ) {
    let myAttribute = this.elementRef.nativeElement.getAttribute('simpleView');
    this.simpleView = (myAttribute != null && `${myAttribute}` !== 'false');
  }

  ngOnInit() {

  }

  public onSubmit(): void {
    this.submitted = true;
    this.submitCallback.emit(this.formModel);
  }

  public handleChangeView(): void {
    this.simpleView = !this.simpleView;
  }
}
