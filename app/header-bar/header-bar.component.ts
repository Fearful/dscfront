import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';
import { User } from '../shared/index';

@Component({
	moduleId: module.id,
	selector: 'header-bar',
	templateUrl: 'header-bar.component.html',
	styleUrls: []
})

export class HeaderBarComponent {
	loggedUser: User;

	constructor( 
		private router: Router,
		private authenticationService: AuthenticationService) {
		router.events.subscribe((val) => {
			let currentUser = localStorage.getItem('currentUser');
			if(currentUser)
		 		this.loggedUser = JSON.parse(currentUser).user;
		 	else
		 		this.loggedUser = undefined;
		});
	}

	logout() {
		this.loggedUser = undefined;
		this.router.navigate(['/login']);
	}
}