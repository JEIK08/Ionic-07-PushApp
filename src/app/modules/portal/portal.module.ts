import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { PortalComponent } from './portal.component';

const ROUTES = RouterModule.forChild([
	{ path: '', component: PortalComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
]);

@NgModule({
	declarations: [
		PortalComponent
	],
	imports: [
		SharedModule,
		ROUTES
	]
})
export class PortalModule { }
