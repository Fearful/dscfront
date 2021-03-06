import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/index';
import { LoginComponent }   from './login/index';
import { ItemCountComponent } from './item-count/index';
import { CountReportComponent } from './count-report/index';
import { AuthGuard }   from './_guards/index';

const routes: Routes = [
	{ path:'', redirectTo:'/home', pathMatch:'full' },
	{ path: 'home',  component: HomeComponent, canActivate: [AuthGuard] }, 
	{ path: 'login', component: LoginComponent },
	{ path: 'item-count', component: ItemCountComponent },
	{ path: 'count-report', component: CountReportComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
