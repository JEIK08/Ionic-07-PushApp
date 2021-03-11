import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler) {

		let headers: HttpHeaders;
		if (localStorage.getItem('bouw-tk')) {
			headers = request.headers
				.append('Authorization', 'Bearer ' + localStorage.getItem('bouw-tk'))
				.append('x-refresh-token', 'Bearer ' + localStorage.getItem('bouw-refresh-tk'));
		} else {
			headers = request.headers.append('x-access-token', environment.ACCESS_TOKEN);
		}

		request = request.clone({
			url: environment.API_URL += request.url,
			headers
		});

		return next.handle(request);
	}

}