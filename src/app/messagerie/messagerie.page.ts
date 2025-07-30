import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNote, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonItem, IonNote, IonLabel, IonList, RouterModule]
})
export class MessageriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    conversations = [
    {
      id: 1,
      name: 'Alice',
      avatar: 'assets/images/user1.jpg',
      lastMessage: 'Bonjour, la chambre est-elle toujours dispo ?',
      time: '15:30',
    },
    {
      id: 2,
      name: 'Marc',
      avatar: 'assets/images/user2.jpg',
      lastMessage: 'Merci pour votre réponse !',
      time: '14:15',
    },
    {
      id: 3,
      name: 'Élodie',
      avatar: 'assets/images/user3.jpg',
      lastMessage: 'J’ai réservé, à bientôt :)',
      time: 'Hier',
    },
  ];
}
