import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, CommonModule, FormsModule, IonButton, IonIcon,],
})


export class SandboxPage implements AfterViewInit {
  
    sections = [
    {
      titre: 'Populaires',
      annonces: [ {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
    },
          ]
      
    },
    {
      titre: 'Nouveautés',
      annonces: [
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
    },]
    },
    {
      titre: 'Coliving Mixte',
      annonces: [{
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
        },
        {
      Annonce_id: 4,
      titre: 'Maison partagée à Lyon',
      description: 'Grande maison avec jardin',
      prix_journee: 35,
      Nb_places: 4,
      Mixte: false,
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    },
        {
      Annonce_id: 5,
      titre: 'Coliving à Paris',
      description: 'Appartement moderne et lumineux',
      prix_journee: 45,
      Nb_places: 3,
      Mixte: true,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o=',
    },]
      }
    
  ];

   @ViewChildren('scrollContainers') scrollContainers!: QueryList<ElementRef>;

  

  

  ngAfterViewInit() {}

  private getScrollElement(sectionTitre: string): HTMLElement | null {
    return this.scrollContainers.find(
      el => el.nativeElement.getAttribute('data-section') === sectionTitre
    )?.nativeElement || null;
  }

  scrollRight(sectionTitre: string) {
    const container = this.getScrollElement(sectionTitre);
    if (container) container.scrollBy({ left: 600, behavior: 'smooth' });
  }

  scrollLeft(sectionTitre: string) {
    const container = this.getScrollElement(sectionTitre);
    if (container) container.scrollBy({ left: -600, behavior: 'smooth' });
  }
}


