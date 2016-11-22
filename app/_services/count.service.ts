import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserCount } from '../item-count/index';

import { Config } from '../config';

@Injectable()
export class CountService {
	constructor(private http: Http, private config: Config) { }

	itemCount(count: UserCount) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		return this.http.post(this.config.getEndpoint() + '/count', JSON.stringify(count), options)
			.map((response: Response) => response.json());
	}
}