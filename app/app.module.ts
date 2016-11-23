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
import { CountReportComponent, CountTableComponent } from './count-report/index';

import { ModalModule, PaginationModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { Config } from './config';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule, 
    ModalModule,
    PaginationModule,
    DatepickerModule,
    Ng2TableModule
  ],
  declarations: [ 
  	AppComponent,
    AlertComponent,
  	HomeComponent,
    LoginComponent,
    ItemCountComponent,
    HeaderBarComponent,
    CountReportComponent,
    CountTableComponent
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