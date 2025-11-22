import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule,RouterModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.scss'
})

export class UserMenu {
  @Input() userInfo!: any;

  private router = inject(Router);

  menuItems: any[] = [
    {
      path: '/profile',
      label: 'Mi Perfil',
      icon: 'person'
    },
    {
      path: '/preferences',
      label: 'Preferencias',
      icon: 'tune',
      dividerAfter: true
    },
    {
      label: 'Cerrar Sesión',
      icon: 'exit_to_app',
      action: () => this.onLogout()
    }
  ];

  onLogout(): void {
    // this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
