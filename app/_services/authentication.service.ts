import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Config } from '../config';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http, private config: Config) { }

	login(username, password, lc) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		return this.http.post(this.config.getEndpoint() + '/login', JSON.stringify({ username: username, password: password }), options)
			.map((response: Response) => {
				let user = response.json();
				if(user && user.message) { 
					localStorage.setItem('currentLc',JSON.stringify(lc));
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			});
	}

	logout() {
		localStorage.removeItem('currentUser');
	}
}