import { Routes } from '@angular/router';
import { detailsResolver } from './features/details/details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/overview/overview.component').then(
        (m) => m.OverviewComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./features/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    resolve: {
      matches: detailsResolver,
    },
  },
];
