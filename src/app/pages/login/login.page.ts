import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import {
  IonContent, IonItem, IonLabel, IonInput, IonButton, IonNote, IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ReactiveFormsModule, IonContent, IonItem, IonLabel, IonInput, IonButton, IonNote, IonSpinner],
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private auth = inject(LoginService);
  private router = inject(Router);

  loading = false;
  errorMsg = '';

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMsg = '';
    const { username, password } = this.form.value;

    this.auth.login(username!, password!).subscribe({
      next: (user) => {
        this.loading = false;
        this.router.navigateByUrl('/accueil');
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err?.error?.message || 'Identifiants invalides';
      }
    });
  }
}
