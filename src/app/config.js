import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from "./home/home.component";
import {TimeAgoComponent} from "./time-ago/time-ago.component";
import {ElementComponent} from "./element/element.component";
import {TrafficLightComponent} from "./trafic-light/trafic-light.component";


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
    path: 'dashboard',
    component: TimeAgoComponent,
    outlet: 'time'
  },
  {
    path: 'time-ago',
    component: TimeAgoComponent
  },
  {
    path: 'angular-element',
    component: ElementComponent
  },
  {
    path: 'traffic-light',
    component: TrafficLightComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
