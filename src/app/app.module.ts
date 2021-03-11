import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AuthService } from './modules/auth/services/auth.service';

import { AppComponent } from './app.component';

const ROUTES = RouterModule.forRoot([
	{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
	{ path: '**', redirectTo: 'auth', pathMatch: 'full' }
]);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		ROUTES
	],
	providers: [
		AuthService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }