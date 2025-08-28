import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./pages/accueil/accueil.page').then((m) => m.AccueilPage),
  },
  {
    path: 'annonce',
    loadComponent: () => import('./pages/annonce/annonce.page').then( m => m.AnnoncePage)
  },
  {
    path: 'service',
    loadComponent: () => import('./pages/service/service.page').then( m => m.ServicePage)
  },
  {
    path: 'messagerie',
    loadComponent: () => import('./pages/messagerie/messagerie.page').then( m => m.MessageriePage)
  },
 {
  path: 'messages/:id',
  loadComponent: () =>
    import('./pages/message-detail/message-detail.page').then(
      (m) => m.MessageDetailPage
    ),
},
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage)
  }








];
