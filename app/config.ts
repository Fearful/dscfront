import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public getEndpoint(): string { 
		return 'http://localhost:8080'; 
	}
}