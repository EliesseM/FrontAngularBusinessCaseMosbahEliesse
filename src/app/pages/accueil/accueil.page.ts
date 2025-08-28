import { Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { 
  IonContent, IonImg, IonItem, IonInput, IonButton, IonIcon, IonModal, IonDatetime 
} from '@ionic/angular/standalone';
import { Annonce } from '../annonce/models/annonce.interface';
import { AnnonceService } from '../annonce/services/annonce.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonContent, IonImg, IonItem, IonInput, IonButton, IonIcon, IonModal, IonDatetime
  ],
})
export class AccueilPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  sections: { titre: string; annonces: Annonce[] }[] = [];
  @ViewChildren('scrollContainers') scrollContainers!: QueryList<ElementRef>;

  constructor(private annonceService: AnnonceService) {}

  searchForm!: FormGroup;

  // état du modal
  isCalendarOpen = false;
  currentCalendar: 'arrivee' | 'depart' | null = null;

  // images pour @for
  images = [
    'https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img/https://www.maisonsberval.fr/wp-content/uploads/ARRIERE-600-1070x624-c-center.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525656167.jpg?k=9513043b491b940693aaa33be7f06816eaea9d6c1354068de654cfeecb3c09b0&o='
  ];

  ngOnInit() {
    this.searchForm = this.fb.group({
      destination: [''],
      dateArrivee: [''],
      dateDepart: [''],
      voyageurs: ['']
    });

    this.annonceService.getAnnonces().subscribe((annonces: Annonce[]) => {
      this.sections = [
        { titre: 'Toutes les annonces', annonces }
        // Tu peux ajouter d'autres sections ici (ex: par catégorie)
      ];
      console.log(this.sections);
    });
  }

  private getScrollElement(sectionTitre: string): HTMLElement | null {
    return (
      this.scrollContainers.find(
        el => el.nativeElement.getAttribute('data-section') === sectionTitre
      )?.nativeElement || null
    );
  }

  scrollRight(sectionTitre: string) {
    const container = this.getScrollElement(sectionTitre);
    if (container) container.scrollBy({ left: 600, behavior: 'smooth' });
  }

  scrollLeft(sectionTitre: string) {
    const container = this.getScrollElement(sectionTitre);
    if (container) container.scrollBy({ left: -600, behavior: 'smooth' });
  }


  openCalendar(type: 'arrivee' | 'depart') {
    this.currentCalendar = type;
    this.isCalendarOpen = true;
  }

  closeCalendar() {
    this.isCalendarOpen = false;
    this.currentCalendar = null;
  }

  selectDate(event: any) {
  const isoDate = event.detail.value; // ex: 2025-08-27T00:00:00.000Z
  const date = new Date(isoDate);

  // format d/m/y
  const formatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  if (this.currentCalendar === 'depart') {
    this.searchForm.get('dateDepart')?.setValue(formatted);
  } else if (this.currentCalendar === 'arrivee') {
    this.searchForm.get('dateArrivee')?.setValue(formatted);
  }

  this.closeCalendar();
}
  rechercher() {
    console.log('Formulaire :', this.searchForm.value);
  }

}

