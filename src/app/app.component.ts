
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp,  IonIcon, IonRouterOutlet, IonRouterLink, IonButton, IonHeader, IonToolbar} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allicons from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonButton, IonApp,  IonIcon, IonRouterLink, IonRouterOutlet, IonHeader, IonToolbar,],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/folder/inbox', icon: 'planet' },
    { title: 'Annonces', url: '/sandbox', icon: 'bed' },
    { title: 'Services', url: '/services', icon: 'construct' },
    { title: 'Messagerie', url: '/folder/archived', icon: 'mail' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons(allicons);
  }
}
