import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  imports: [ IonContent, IonImg],
})
export class AccueilPage implements OnInit {
  public accueil!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.accueil = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
