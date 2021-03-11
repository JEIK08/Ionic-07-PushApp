import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  {

	public form: FormGroup;
	public loading: boolean;

	constructor(
		private authService: AuthService,
		private fb: FormBuilder,
	) {
		this.form = this.fb.group({
			email: [null, Validators.required],
			password: [null, Validators.required]
		});
	}

	onSubmit() {
		if (this.form.invalid) return;

		this.loading = true;
	}

}
