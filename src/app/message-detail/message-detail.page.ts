import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonAvatar, IonItem, IonContent, IonToolbar, CommonModule, FormsModule, IonFooter, IonContent, IonInput, IonButton,]
})
export class MessageDetailPage implements OnInit {

   messages = [
    { text: 'Bonjour ! Le logement est-il encore disponible ?', avatar: 'assets/avatar1.png' },
    { text: 'Oui, il l’est toujours 🙂', avatar: 'assets/avatar2.png' },
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        avatar: 'assets/avatar1.png',
      });
      this.newMessage = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
