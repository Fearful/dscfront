import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/index';
import { LoginComponent }   from './login/index';
import { AuthGuard }   from './_guards/index';

const routes: Routes = [
  { path: '',  component: HomeComponent, canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
