import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService, AlertService, LogisticCenterService, LocationService, CountService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { ItemCountComponent } from './item-count/index';
import { AlertComponent } from './_directives/index';
import { HeaderBarComponent } from './header-bar/index';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Config } from './config';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule, 
    ModalModule
  ],
  declarations: [ 
  	AppComponent,
    AlertComponent,
  	HomeComponent,
    LoginComponent,
    ItemCountComponent,
    HeaderBarComponent
  ],
  providers: [
    Config,
    AuthGuard,
    AuthenticationService,
    AlertService,
    LogisticCenterService,
    LocationService,
    CountService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }