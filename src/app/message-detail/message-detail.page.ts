import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonInput, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.page.html',
  styleUrls: ['./message-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonToolbar, CommonModule, FormsModule, IonFooter, IonContent, IonInput, IonButton, IonButtons, IonIcon]
})
export class MessageDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
