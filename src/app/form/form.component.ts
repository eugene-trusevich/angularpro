import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public simpleView: boolean;
  @Input()
  set view(view: boolean) {
    this.simpleView = view;
  }

  public submitted: boolean = false;
  public formModel: any = {};


  constructor() {
  }

  ngOnInit() {
    console.log(this.simpleView);
  }

  public onSubmit(): void {
    this.submitted = true;
    console.log(this.formModel);
  }

  public handleChangeView(): void {
    this.simpleView = !this.simpleView;
  }
}
