import {Route, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from "./home/home.component";
import {TimeAgoComponent} from "./time-ago/time-ago.component";
import {ElementComponent} from "./element/element.component";


//TODO why dont work with  - export const routes: Routes = [
export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'time-ago',
    component: TimeAgoComponent
  },
  {
    path: 'angular-element',
    component: ElementComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
