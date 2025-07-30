import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonItem, IonNote, IonLabel, RouterModule]
})
export class MessageriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    conversations = [
    {
      id: 1,
      name: 'Alice',
      avatar: 'https://i.pinimg.com/564x/e8/58/f2/e858f27e0b5ce2d8a3a59330ed4d5314.jpg',
      lastMessage: 'Bonjour, la chambre est-elle toujours dispo ?',
      time: '15:30',
    },
    {
      id: 2,
      name: 'Marc',
      avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQHuVPITXK7bqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1580996535167?e=2147483647&v=beta&t=R2UjbrKo9LFkywzPuOIfCL_HAkDdhMgE3KAj_La7wyM',
      lastMessage: 'Merci pour votre réponse !',
      time: '14:15',
    },
    {
      id: 3,
      name: 'Élodie',
      avatar: 'https://cdn-images.dzcdn.net/images/artist/3321bb134401072d3203b8fc66a8b69a/1900x1900-000000-80-0-0.jpg',
      lastMessage: 'J’ai réservé, à bientôt :)',
      time: 'Hier',
    },
  ];
}
