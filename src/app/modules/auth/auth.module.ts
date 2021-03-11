import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { AuthComponent } from './auth.component';

const ROUTES = RouterModule.forChild([
	{ path: '', component: AuthComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
]);

@NgModule({
	declarations: [
		AuthComponent
	],
	imports: [
		SharedModule,
		ROUTES
	]
})
export class AuthModule { }