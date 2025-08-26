import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Annonce } from '../models/annonce.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = `${environment.apiUrl}/annonces`;

  constructor(private http: HttpClient) {}

  // Récupérer toutes les annonces
  getAnnonces(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Récupérer une annonce par ID
  getAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.apiUrl}/${id}`);
  }

  // Créer une annonce
  createAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce);
  }

  // Mettre à jour une annonce
  updateAnnonce(id: number, annonce: Partial<Annonce>): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.apiUrl}/${id}`, annonce);
  }

  // Supprimer une annonce
  deleteAnnonce(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
