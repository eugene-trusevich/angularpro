import {ElementComponent} from "./element/element.component";
import {TrafficComponent} from "./traffic/traffic.component";


//TODO why dont work with  - export const routes: Routes = [
export const routes = [
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'time-ago',
    loadChildren: 'src/app/time-ago/time-ago.module#TimeAgoModule',
  },
  {
    path: 'angular-element',
    component: ElementComponent
  },
  {
    path: 'traffic-light',
    component: TrafficComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
