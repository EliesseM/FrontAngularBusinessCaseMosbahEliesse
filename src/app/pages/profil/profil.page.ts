// profil.page.ts - Version avec imports granulaires
import { Component, inject } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonIcon, 
  IonChip, 
  IonLabel, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonContent,
    IonIcon,
    IonChip,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonButton
  ],
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss']
})
export class ProfilPage {
  private auth = inject(LoginService);
  currentUser$ = this.auth.currentUser$;
}