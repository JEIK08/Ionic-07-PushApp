import { Component } from '@angular/core';

import {
	Plugins,
	PushNotificationsPlugin,
	NotificationPermissionResponse,
	PushNotificationToken,
	PushNotification,
	PushNotificationActionPerformed,
} from '@capacitor/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-portal',
	templateUrl: './portal.component.html',
	styleUrls: ['./portal.component.scss'],
})
export class PortalComponent {

	private pushPlugin: PushNotificationsPlugin;

	constructor(private authService: AuthService) {
		this.pushPlugin = Plugins.PushNotifications;

		this.pushPlugin.requestPermission().then((response: NotificationPermissionResponse) => {
			console.log('requestPermissions', response);
			if (response.granted) {
				// Register with Apple / Google to receive push via APNS/FCM
				this.pushPlugin.register();
			} else {
				// Show some error
			}
		});

		this.pushPlugin.addListener('registration', (token: PushNotificationToken) => {
			console.log('registration', token);
			this.authService.registerToken(token.value).subscribe();
		});

		this.pushPlugin.addListener('registrationError', (error: any) => {
			console.log('registrationError', error);
		});

		this.pushPlugin.addListener('pushNotificationReceived', (notification: PushNotification) => {
			console.log('pushNotificationReceived', notification);
		});

		this.pushPlugin.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
			console.log('pushNotificationActionPerformed', notification);
		});
	}

}