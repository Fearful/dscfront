import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, AlertService, LogisticCenterService } from '../_services/index';
import { LogisticCenter } from '../shared/index';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
	lcList: LogisticCenter[] = [];


	constructor( 
		private router: Router,
		private authenticationService: AuthenticationService,
		private logisticCenterService: LogisticCenterService,
		private alertService: AlertService) {}

	ngOnInit() {
		this.authenticationService.logout();
		this.loadLcList();
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.model.username,this.model.password, this.model.selectedLc)
			.subscribe(
				data => {
					this.router.navigate(['/home']);
				},
				error => {
					this.alertService.error(error.json().message);
					this.loading = false;
				});
	}

	private loadLcList() {
		this.logisticCenterService.getLogisticCenterList()
			.subscribe(lcList => { 
				this.lcList = lcList;
				this.lcList.unshift(new LogisticCenter('<Select one>',undefined,undefined));});
	}

	private validateLC() {
		return (this.model.selectedLc != undefined 
			&& this.model.selectedLc.code != undefined);
	}
}