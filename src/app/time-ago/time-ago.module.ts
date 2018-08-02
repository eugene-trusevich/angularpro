import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TimeAgoComponent} from './time-ago.component';
import {TimeAgoPipe} from '../common/pipes/time-ago.pipe';


const routes: Routes = [
  {
    path: '',
    component: TimeAgoComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
    TimeAgoComponent,
    TimeAgoPipe
  ]


})
export class TimeAgoModule { }
