import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService, AlertService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AlertComponent } from './_directives/index';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
    AlertComponent,
  	HomeComponent,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }