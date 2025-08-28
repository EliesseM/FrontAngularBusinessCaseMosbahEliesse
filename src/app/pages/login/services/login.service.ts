import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur.interface';

interface LoginResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private http = inject(HttpClient);
  private currentUserSubject = new BehaviorSubject<Utilisateur | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  private authUrl = `${environment.apiUrl}/login_check`;

  // Login (username ou email)
login(usernameOrEmail: string, password: string) {
  return this.http.post<LoginResponse>(this.authUrl, { username: usernameOrEmail, password }).pipe(
    tap(res => {
      localStorage.setItem('access_token', res.token);
    }),
    switchMap(() => this.fetchCurrentUser()) // récupère l'utilisateur avant de naviguateur
  );
}

  // Récupérer utilisateur courant
  fetchCurrentUser(): Observable<Utilisateur> {
    const token = this.getToken();
    if (!token) throw new Error('Pas de token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Utilisateur>(`${environment.apiUrl}/users/me`, { headers }).pipe(
      tap(user => this.currentUserSubject.next(user))
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
