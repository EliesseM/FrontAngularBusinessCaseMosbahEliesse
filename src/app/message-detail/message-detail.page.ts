import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [IonTitle, IonHeader, IonAvatar, IonItem, IonContent, IonToolbar, CommonModule, FormsModule, IonFooter, IonContent, IonInput, IonButton,]
})
  
  
export class MessageDetailPage implements OnInit {

  conversationId!: string;
  messages: { from: string; content: string; avatar: string }[] = [];
  newMessage: string = '';
  name!: string;
  avatar!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.conversationId = this.route.snapshot.paramMap.get('id')!;
    this.name = this.route.snapshot.queryParamMap.get('name')!;
    this.avatar = this.route.snapshot.queryParamMap.get('avatar')!;
    this.loadMessages(this.conversationId);
  }

  loadMessages(id: string) {
    const rawMessages = this.messagesData[id] || [];
    this.messages = rawMessages.map(msg => ({
      from: msg.from,
      content: msg.content,
      avatar: msg.from === 'Moi' ? 'https://www.maxicasting.com/wp-content/uploads/2024/06/449046919_1171673980848349_3091454694618699012_n-266x300.jpg' : this.avatar,
    }));
  }

  sendMessage() {
    const content = this.newMessage.trim();
    if (!content) return;

    this.messages.push({
      from: 'Moi',
      content,
      avatar: 'https://www.maxicasting.com/wp-content/uploads/2024/06/449046919_1171673980848349_3091454694618699012_n-266x300.jpg',
    });

    this.newMessage = '';
  }

  messagesData: { [key: string]: { from: string; content: string }[] } = {
    '1': [
      { from: 'Alice', content: 'Bonjour, la chambre est-elle toujours dispo ?' },
      { from: 'Moi', content: 'Oui, elle est toujours disponible 😊' },
    ],
    '2': [
      { from: 'Marc', content: 'Merci pour votre réponse !' },
      { from: 'Moi', content: 'Avec plaisir !' },
    ],
    '3': [
      { from: 'Élodie', content: 'J’ai réservé, à bientôt :)' },
      { from: 'Moi', content: 'Super, à bientôt !' },
    ],
  };
}