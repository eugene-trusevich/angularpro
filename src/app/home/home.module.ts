import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {CounterComponent} from '../counter/counter.component';
import {CounterStoreComponent} from '../counter-store/counter-store.component';
import {AclDirective} from '../common/directives/acl.directive';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
    HomeComponent,
    CounterComponent,
    CounterStoreComponent,
    AclDirective
  ]


})
export class HomeModule { }
