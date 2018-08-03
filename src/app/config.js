import {ProxyRouteComponent} from "./common/components/proxy-route/proxy-route.component";


//TODO why dont work with  - export const routes: Routes = [
export const routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    pathMatch: 'full'
  },
  {
    path: 'compose',
    outlet: 'time',
    component: ProxyRouteComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadChildren: './time-ago/time-ago.module#TimeAgoModule',
      }
    ],
  },
  {
    path: 'time-ago',
    loadChildren: './time-ago/time-ago.module#TimeAgoModule',
  },
  {
    path: 'angular-element',
    loadChildren: './element/element.module#ElementModule',
  },
  {
    path: 'traffic-light',
    loadChildren: './traffic/traffic.module#TrafficModule',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
