import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	templateUrl: 'item-count.component.html'
})

export class ItemCountComponent implements OnInit { 
	model: any = {};
	logisticCenter: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		// this.logisticCenter = this.route.params
		// 	.map( params => params['location'] || 'Nada' );
		// this.model.accountNumber = this.route.params
		// 	.map( params => params['account'] || '-' );
		this.route.params.subscribe(params => {
			this.logisticCenter = params['location'];
			this.model.accountNumber = params['account'];
			this.model.itemCode = params['itemCode'];
			this.model.itemDescription = params['itemDescription'];
		});
	}

	verifyCount() {
		//this.router.navigate(['/']);
	}

}