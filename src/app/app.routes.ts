import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil/inbox',
    pathMatch: 'full',
  },
  {
    path: 'accueil/:id',
    loadComponent: () =>
      import('./components/accueil/accueil.page').then((m) => m.AccueilPage),
  },
  {
    path: 'annonce',
    loadComponent: () => import('./components/annonce/annonce.page').then( m => m.AnnoncePage)
  },
  {
    path: 'services',
    loadComponent: () => import('./components/service/services.page').then( m => m.ServicesPage)
  },
  {
    path: 'messagerie',
    loadComponent: () => import('./components/messagerie/messagerie.page').then( m => m.MessageriePage)
  },
 {
  path: 'messages/:id',
  loadComponent: () =>
    import('./components/message-detail/message-detail.page').then(
      (m) => m.MessageDetailPage
    ),
}






];
