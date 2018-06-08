import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AclDirective} from './common/directives/acl.directive';
import {UserService} from './common/services/user.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {routes} from './config';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {Child1Component} from './dashboard/child1/child1.component';
import {Child2Component} from './dashboard/child2/child2.component';
import {Child3Component} from './dashboard/child3/child3.component';
import {Child4Component} from './dashboard/child4/child4.component';
import {Child5Component} from './dashboard/child5/child5.component';
import { HostDirective } from './common/directives/host.directive';
import { TimeAgoPipe } from './common/pipes/time-ago.pipe';
import { TimeAgoComponent } from './time-ago/time-ago.component';

@NgModule({
  declarations: [
    AppComponent,
    AclDirective,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    HostDirective,
    TimeAgoPipe,
    TimeAgoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
