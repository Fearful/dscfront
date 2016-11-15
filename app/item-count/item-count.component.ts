import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	templateUrl: 'item-count.component.html'
})

export class ItemCountComponent { 
	model: any = {};
	logisticCenter: string = 'Burzaco';

	constructor(
		private router: Router) { }

	verifyCount() {
		//this.router.navigate(['/']);
	}

}