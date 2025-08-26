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
      import('./components/accueil/accueil.page').then((m) => m.AccueilPage),
  },
  {
    path: 'annonce',
    loadComponent: () => import('./components/annonce/annonce.page').then( m => m.AnnoncePage)
  },
  {
    path: 'service',
    loadComponent: () => import('./components/service/service.page').then( m => m.ServicePage)
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
