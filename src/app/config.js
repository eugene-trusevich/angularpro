import {ElementComponent} from "./element/element.component";
import {TrafficComponent} from "./traffic/traffic.component";
import {ProxyRouteComponent} from "./common/components/proxy-route/proxy-route.component";


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
    path: 'dashboard',
    outlet: 'time',
    component: ProxyRouteComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/time-ago/time-ago.module#TimeAgoModule'
      }
    ],
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
