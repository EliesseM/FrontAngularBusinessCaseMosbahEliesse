import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Annonce } from '../models/annonce.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/annonces`;

  /**
   * Récupérer toutes les annonces (API Platform renvoie hydra:member)
   */
  getAnnonces(): Observable<Annonce[]> {
   return this.http.get<Annonce[]>(this.apiUrl, { headers: { 'accept': 'application/json' } });
  }

  /**
   * Récupérer une annonce par ID
   */
  getAnnonce(id: number): Observable<Annonce> {
  return this.http.get<Annonce>(this.apiUrl + '/' + id, { headers: { 'accept': 'application/json' } });
  }

  // /**
  //  * Créer une annonce
  //  */
  // createAnnonce(annonce: Annonce): Observable<Annonce> {
  //   return this.http.post<Annonce>(this.apiUrl, annonce);
  // }

  // /**
  //  * Mettre à jour une annonce
  //  */
  // updateAnnonce(id: number, annonce: Partial<Annonce>): Observable<Annonce> {
  //   return this.http.put<Annonce>(`${this.apiUrl}/${id}`, annonce);
  // }

  // /**
  //  * Supprimer une annonce
  //  */
  // deleteAnnonce(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
