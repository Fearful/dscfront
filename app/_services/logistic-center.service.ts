import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LogisticCenter } from '../shared/logistic-center';

@Injectable()
export class LogisticCenterService {

	private apiurl: string = 'http://localhost:8080';

	constructor( private http: Http ) { }

	getLogisticCenterList() {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		return this.http.get(this.apiurl + '/wms-rest/logisticCenters', options)
			.map((response: Response) =>  response.json().logisticCenters);
	}
}