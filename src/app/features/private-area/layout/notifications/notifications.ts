import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-notifications',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatBadgeModule,MatDividerModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss'
})
export class Notifications {

  @Input() notifications: any[] = [];

  get notificationCount(): number {
    return this.notifications.length;
  }

  trackByNotification(index: number, notification: any): string {
    return notification.index || `${notification.icon}-${notification.message}-${index}`;
  }

  onNotificationClick(notification: Notification): void {
    console.log('Clicked notification:', notification);
    // TODO: Implementar navegación o acción según el tipo de notificación
  }

  onDismissNotification(event: Event, notification: Notification): void {
    event.stopPropagation(); // Evitar que se ejecute onNotificationClick
    console.log('Dismissing notification:', notification);
    // TODO: Implementar dismiss de notificación
    // this.notificationService.dismiss(notification.id);
  }

  onClearAll(): void {
    console.log('Clearing all notifications');
    // TODO: Implementar limpiar todas las notificaciones
    // this.notificationService.clearAll();
  }

  onViewAll(): void {
    console.log('View all notifications');
    // TODO: Navegar a página de todas las notificaciones
  }
}
