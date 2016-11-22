import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LogisticCenter } from '../shared/logistic-center';

import { Config } from '../config';

@Injectable()
export class LogisticCenterService {

	constructor( private http: Http, private config: Config ) { }

	getLogisticCenterList() {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		return this.http.get(this.config.getEndpoint() + '/logisticCenters', options)
			.map((response: Response) =>  response.json().logisticCenters);
	}
}