import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

export const loginInterceptor = (
  req: HttpRequest<unknown>, 
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const auth = inject(LoginService);
  const token = auth.getToken();

  // 🔥 N'ajoute PAS le token pour les routes publiques
  const isPublic = req.url.includes('/api/annonces');

  if (token && !isPublic) {
    return next(req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    }));
  }

  return next(req);
};

