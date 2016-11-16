import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Config } from '../config';

@Injectable()
export class LocationService {

	constructor( private http: Http, private config: Config ) { }

	validateLocation(location, user, lc) {
		let headers = new Headers({ 'Content-Type': 'application/json' });

		let params = new URLSearchParams();
		params.set('location',location);
		params.set('user',user);
		params.set('lc_id',lc);

		let options = new RequestOptions({ headers: headers, search: params });

		return this.http.get(this.config.getEndpoint() + '/wms-rest/location', options)
			.map((response: Response) => response.json());
	}
}