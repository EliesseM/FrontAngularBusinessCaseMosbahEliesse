import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { AnnonceService } from '../../services/annonce.service';
import { Annonce } from '../../models/annonce.interface';

@Component({
  selector: 'app-annonce',
  standalone: true,
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, CommonModule, FormsModule, IonButton, IonIcon],
})
export class AnnoncePage implements AfterViewInit, OnInit {
  sections: { titre: string; annonces: Annonce[] }[] = [];
  annonces: Annonce[] = [];
  @ViewChildren('scrollContainers') scrollContainers!: QueryList<ElementRef>;

  constructor(private annonceService: AnnonceService) {}

  ngOnInit() {
    this.annonceService.getAnnonces().subscribe({
      next: (data) => {
        this.annonces = data;
        console.log(this.annonces);
        this.sections = [
          { titre: 'Toutes les annonces', annonces: this.annonces }
          // Tu peux ajouter ici d'autres sections selon tes critères
        ];
        console.log(this.sections);
      },
    }) ;
  }
//  chargeAnnouncements() {
//     this.isLoading = true

//     this.announcementService.getAnnouncements().subscribe({
//       next: (data) => {

//         this.announcements = data;
//         this.isLoading = false;
//         console.log(this.announcements);
//       },
//     });
//   }

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