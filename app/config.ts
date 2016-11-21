import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public getEndpoint(): string { 
		return 'http://localhost:8080'; 
		//return 'http://10.9.160.104:8081';
	}
}