import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { InterceptorService } from './services/interceptor.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';

const ROUTES = RouterModule.forRoot([
	{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
	{ path: '', loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule) },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
]);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		IonicModule.forRoot(),
		ROUTES
	],
	providers: [
		AuthService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }