import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg]
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
services = [
    {
      title: 'Ménage Hebdomadaire',
      image: 'assets/images/cleaning.jpg',
      description: 'Service de nettoyage professionnel inclus.',
    },
    {
      title: 'Espace Coworking',
      image: 'assets/images/coworking.jpg',
      description: 'Un espace calme et inspirant pour travailler.',
    },
    {
      title: 'Transport partagé',
      image: 'assets/images/transport.jpg',
      description: 'Vélos et voitures disponibles en libre service.',
    },
  ];
}
