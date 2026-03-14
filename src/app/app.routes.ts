import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    title: 'Digital Bond | HomePage',
    loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage)},
  { path: 'done' ,
    title: 'Digital Bond | Success',
    loadComponent: () => import('./pages/success/success').then(m => m.Success)},
  { path: '**' , redirectTo: '' , pathMatch: 'full'}
];
