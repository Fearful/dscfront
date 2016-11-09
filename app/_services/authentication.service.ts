import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http) { }

	login(username, password) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		return this.http.post('http://localhost:8080/wms-rest/login', JSON.stringify({ username: username, password: password }), options)
			.map((response: Response) => {
				let user = response.json();
				if(user && user.message) {
					console.log(user.message);
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			});
	}

	logout() {
		localStorage.removeItem('currentUser');
	}
}