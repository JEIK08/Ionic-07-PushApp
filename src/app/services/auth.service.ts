import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient
	) { }

	logIn(credentials: any) {
		return new Promise((resolve: Function, reject: Function) => {
			this.http.post('/login', credentials).subscribe((data: any) => {
				localStorage.setItem('bouw-tk', data.token);
				localStorage.setItem('bouw-refresh-tk', data.refreshToken);
				resolve();
			}, (error: any) => reject(error));
		});
	}

	registerToken(device_token: string) {
		return this.http.post(`/user-add-device-token`, { device_token });
	}

}