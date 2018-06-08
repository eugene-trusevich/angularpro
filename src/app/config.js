import {Route, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from "./home/home.component";


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
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
