import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonRouterLink,
  IonButton,
  IonHeader,
  IonToolbar,
  IonModal,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allicons from 'ionicons/icons';
import { LoginService } from './pages/login/services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    IonApp,
    IonIcon,
    IonRouterLink,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonButton,
    CommonModule
  ],
})
export class AppComponent {

  private auth = inject(LoginService);
  currentUser$ = this.auth.currentUser$;

  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'planet' },
    { title: 'Annonces', url: '/annonce', icon: 'bed' },
    { title: 'Services', url: '/service', icon: 'construct' },
    { title: 'Messagerie', url: '/messagerie', icon: 'mail' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  private fb = inject(FormBuilder);
  isLoginOpen = false;
  loginForm!: FormGroup;

  constructor() {
    addIcons(allicons);

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  openLogin() {
    this.isLoginOpen = true;
  }

  closeLogin() {
    this.isLoginOpen = false;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Tentative connexion :', this.loginForm.value);

      // TODO: ici appel à mon API Symfony (ex: /login_check)
      // this.http.post('http://localhost:8000/api/login_check', this.loginForm.value)

      this.closeLogin();
    }
  }
}
