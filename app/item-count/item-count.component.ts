import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserCount } from './index';
import { CountService, AlertService } from '../_services/index';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	templateUrl: 'item-count.component.html'
})

export class ItemCountComponent implements OnInit { 
	model: any = {};
	userCount: UserCount = new UserCount();
	locationCode: string;
	countTimes: number;
	modalMessage: string = '';
	@ViewChild('confirmModal') public confirmModal:ModalDirective;
	@ViewChild('recountModal') public recountModal:ModalDirective;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private countService: CountService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.locationCode = params['location'];
			this.model.accountNumber = params['account'];
			this.model.itemCode = params['itemCode'];
			this.model.itemDescription = params['itemDescription'];
			this.countTimes = 1;
		});
	}

	verifyCount() {
		this.fillCount();
		this.countService.itemCount(this.userCount)
			.subscribe(
				data => {
					if(data.resultCode == 10) {
						this.modalMessage = data.message;
						this.confirmModal.show();
					} else {
						this.modalMessage = data.message;
						this.countTimes = 2;
						this.recountModal.show();
					}
				},
				error => {
					if(error.status == 500)
						this.alertService.error('There was an error on the server. Try again or contact your administrator');
					else
						this.alertService.error(error);
				});
	}

	private fillCount() {
		let currUser = JSON.parse(localStorage.getItem('currentUser')).user;
		let lc = JSON.parse(localStorage.getItem('currentLc'));
		this.userCount.itemCode = this.model.itemCode;
		this.userCount.lcCode = lc.code;
		this.userCount.locationCode = this.locationCode;
		this.userCount.numberPallets = +this.model.fullPallets;
		this.userCount.numberPartialPallets = +this.model.partialPallets;
		this.userCount.user = currUser.name;
		this.userCount.account = this.model.accountNumber;
		this.userCount.countTimes = this.countTimes;
	}

	private countOk() {
		this.router.navigate(['/home']);
	}

	validateNumber(event: KeyboardEvent) {
		let exp = new RegExp('[0-9]');
		if(!exp.test(event.key)) {
			event.stopPropagation();
			event.preventDefault();
		}
	}

}