import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/login-layout/login-layout').then(m => m.LoginLayout),
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/login/login').then(m => m.Login),
                title: 'Iniciar sesión - Fisiogest'
            },
            {
                path: 'registro',
                loadComponent: () =>
                    import('./pages/register/register').then(m => m.Register),
                title: 'Solicitar acceso - Fisiogest'
            },
            {
                path: 'recuperar-contraseña',
                loadComponent: () =>
                    import('./pages/forgot-password/forgot-password').then(m => m.ForgotPassword),
                title: 'Recuperar contraseña - Fisiogest'
            },
            {
                path: 'resetear-contraseña/:token',
                loadComponent: () =>
                    import('./pages/reset-password/reset-password').then(m => m.ResetPassword),
                title: 'Restablecer contraseña - Fisiogest'
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
];