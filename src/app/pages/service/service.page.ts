import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-services',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg]
})
export class ServicePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
services = [
    {
      title: 'Ménage Hebdomadaire',
      image: 'https://www.helpling.fr/wp-content/uploads/2023/08/Homme-et-Femme-de-Menage-Helpling-1-720x458.webp',
      description: 'Service de nettoyage professionnel inclus.',
    },
    {
      title: 'Espace Coworking',
      image: 'https://bhz-coworking.bzh/wp-content/uploads/2019/04/bhz_coworking_accueil_01.jpg',
      description: 'Un espace calme et inspirant pour travailler.',
    },
    {
      title: 'Transport partagé',
      image: 'https://tribunedelyon.fr/wp-content/uploads/sites/5/2023/10/leogo-dr.jpg',
      description: 'Vélos et voitures disponibles en libre service.',
    },
  ];
}
