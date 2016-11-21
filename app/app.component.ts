import { Component, ViewContainerRef } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent { 
	private viewContainerRef: ViewContainerRef;

	public constructor(viewContainerRef: ViewContainerRef) {
		//hack needed for ng2-bootstrap modals
		this.viewContainerRef = viewContainerRef;
	}
}