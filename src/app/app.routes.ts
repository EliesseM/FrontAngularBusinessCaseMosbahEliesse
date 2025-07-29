import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },  {
    path: 'sandbox',
    loadComponent: () => import('./sandbox/sandbox.page').then( m => m.SandboxPage)
  },

];
