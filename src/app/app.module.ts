import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

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
import {HostDirective} from './common/directives/host.directive';
import {TimeAgoPipe} from './common/pipes/time-ago.pipe';
import {TimeAgoComponent} from './time-ago/time-ago.component';
import {ElementComponent} from './element/element.component';
import {FormComponent} from './form/form.component';
import {createCustomElement} from '@angular/elements';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TrafficLightComponent } from './common/components/trafic-light/trafic-light.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficValidatorDirective } from './common/directives/traffic-validator.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CounterComponent } from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import { CounterStoreComponent } from './counter-store/counter-store.component';
import {counterReducer} from './counter-store/counter-reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    TimeAgoComponent,
    ElementComponent,
    FormComponent,
    TrafficLightComponent,
    TrafficComponent,
    TrafficValidatorDirective,
    CounterComponent,
    CounterStoreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      counter: counterReducer
    },{
    initialState:{
      counter: 0
    }
    }),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    FormComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    // private injector: Injector
  ) {
    // const formELement = createCustomElement(FormComponent, {injector: this.injector});
    // customElements.define('register-form', formELement);
  }

  // ngDoBootstrap() {}
}
