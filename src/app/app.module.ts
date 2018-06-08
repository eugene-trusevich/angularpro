import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AclDirective } from './common/directives/acl.directive';
import {UserService} from './common/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AclDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
