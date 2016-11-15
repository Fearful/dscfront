import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { LocationService, AlertService } from '../_services/index';


@Component({
	moduleId: module.id,
	templateUrl: 'home.component.html'
})

export class HomeComponent { 
	model: any = {};

	constructor(
		private router: Router,
		private locationService: LocationService,
		private alertService: AlertService) { }

	verifyNumber() {
		let currUser = JSON.parse(localStorage.getItem('currentUser')).user;
		let lc = localStorage.getItem('currentLc');
		this.locationService.validateLocation(this.model.location,currUser.email,lc)
			.subscribe(
				data => {
					console.log('hola');
					let navigationExtras: NavigationExtras = {
						queryParams: {
							'account': data.account,
							'location': data.location,
							'itemCode': data.item.code,
							'itemDescription': data.item.description}
					}

					this.router.navigate(['/item-count', navigationExtras]);
				},
				error => {
					this.alertService.error(error);
				});
	}

}