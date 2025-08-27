import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { 
  IonContent, IonImg, IonItem, IonInput, IonButton, IonIcon, IonModal, IonDatetime 
} from '@ionic/angular/standalone';

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
    const dateStr = event.detail.value;
    if (this.currentCalendar === 'depart') {
      this.searchForm.get('dateDepart')?.setValue(dateStr);
    } else if (this.currentCalendar === 'arrivee') {
      this.searchForm.get('dateArrivee')?.setValue(dateStr);
    }
    this.closeCalendar();
  }

  rechercher() {
    console.log('Formulaire :', this.searchForm.value);
  }
}
