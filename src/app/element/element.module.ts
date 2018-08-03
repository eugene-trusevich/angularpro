import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ElementComponent} from './element.component';
import {FormComponent} from '../form/form.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ElementComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    ElementComponent,
    FormComponent
  ],
  entryComponents: [
    FormComponent
  ],
})
export class ElementModule { }
