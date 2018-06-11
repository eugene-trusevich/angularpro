import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public submitted: boolean = false;
  public simpleView: boolean = true;
  public formModel: any = {};


  constructor() {
  }

  ngOnInit() {
  }


  public onSubmit(): void {
    this.submitted = true;
    console.log(this.formModel);
  }
}
