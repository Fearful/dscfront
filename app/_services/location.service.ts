import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationService {
	private apiurl: string = 'http://localhost:8080';

	constructor( private http: Http ) { }

	validateLocation(location, user, lc) {
		let headers = new Headers({ 'Content-Type': 'application/json' });

		let params = new URLSearchParams();
		params.set('location',location);
		params.set('user',user);
		params.set('lc',lc);

		let options = new RequestOptions({ headers: headers, search: params });

		return this.http.get(this.apiurl + '/wms-rest/location', options)
			.map((response: Response) => response.json());
	}
}