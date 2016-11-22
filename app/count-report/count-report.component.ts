import { Component, OnInit } from '@angular/core';

import { LogisticCenter } from '../shared/index';
import { LogisticCenterService } from '../_services/index';
import { CountLog } from './count-log';

@Component({
	moduleId: module.id,
	templateUrl: 'count-report.component.html'
})

export class CountReportComponent {
	model: any = {};
	lcList: LogisticCenter[] = [];
	countList: CountLog[] = [];

	constructor(
		private logisticCenterService: LogisticCenterService) {}

	ngOnInit() {
		this.loadLcList();
		this.countList.push(new CountLog('aLocation','aUser','anItem','aFPNumber','aPPNumber','OK'));
		this.countList.push(new CountLog('aLocation','aUser','anItem','aFPNumber','aPPNumber','Mismatch'));
		this.countList.push(new CountLog('aLocation','aUser','anItem','aFPNumber','aPPNumber','OK'));
	}

	private loadLcList() {
		this.logisticCenterService.getLogisticCenterList()
			.subscribe(lcList => { 
				this.lcList = lcList;
				this.lcList.unshift(new LogisticCenter('<All>',undefined,undefined));
			});
	}
}