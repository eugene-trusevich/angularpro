import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {UserService} from './common/services/user.service';
import {routes} from './config';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {createCustomElement} from '@angular/elements';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TrafficValidatorDirective } from './common/directives/traffic-validator.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter-store/counter-reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProxyRouteComponent } from './common/components/proxy-route/proxy-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrafficValidatorDirective,
    ProxyRouteComponent
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

  ],
  providers: [UserService],
  bootstrap: [AppComponent],
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
