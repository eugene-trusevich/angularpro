import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HostDirective} from '../common/directives/host.directive';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {Child3Component} from './child3/child3.component';
import {Child4Component} from './child4/child4.component';
import {Child5Component} from './child5/child5.component';
// import {TimeAgoComponent} from '../time-ago/time-ago.component';
// import {TimeAgoModule} from '../time-ago/time-ago.module';
// import {TimeAgoPipe} from '../common/pipes/time-ago.pipe';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path: '',
  //   component: TimeAgoComponent,
  //   outlet: 'time',
  // }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // TimeAgoModule

  ],
  declarations: [
    DashboardComponent,
    HostDirective,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    // TimeAgoComponent,
    // TimeAgoPipe
  ],
  entryComponents:[
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component
  ]


})
export class DashboardModule { }
