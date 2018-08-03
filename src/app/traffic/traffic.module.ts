import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TrafficComponent} from './traffic.component';
import {TrafficLightComponent} from '../common/components/trafic-light/trafic-light.component';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: TrafficComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    TrafficComponent,
    TrafficLightComponent
  ]
})
export class TrafficModule { }
