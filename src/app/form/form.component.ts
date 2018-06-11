import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public simpleView: boolean;

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
    console.log(this.formModel);
  }

  public handleChangeView(): void {
    this.simpleView = !this.simpleView;
  }
}
