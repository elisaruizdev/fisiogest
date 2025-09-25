import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Notifications } from '../notifications/notifications';
import { UserMenu } from '../user-menu/user-menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbar, MatButtonModule, MatIconModule, UserMenu, Notifications],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() isMobile: boolean | null = false;
  @Input() currentPageTitle: string = '';
  notifications = input<any[]>()

  userInfo = input<any>()
  toggleSidenav = output<void>();

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}
