import { Routes } from '@angular/router';
/* import { authGuard } from './features/auth/guards/auth.guard';
import { publicGuard } from './features/auth/guards/public.guard'; */


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/auth/pages/login/login')
                .then(m => m.Login),
        title: 'Iniciar sesión - Fisiogest'
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    }
]