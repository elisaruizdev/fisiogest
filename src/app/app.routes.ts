import { Routes } from '@angular/router';
/* import { authGuard } from './features/auth/guards/auth.guard';
import { publicGuard } from './features/auth/guards/public.guard'; */


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/private-area/private-area.routes').then((m) => m.privateAreaRoutes),
  },
];   