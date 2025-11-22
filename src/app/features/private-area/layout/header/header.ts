import { CommonModule } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() isMobile: boolean | null = false;
  @Input() currentPageTitle: string = '';
  notifications = input<any[]>();

  userInfo = input<any>();
  toggleSidenav = output<void>();

  constructor(private routes: Router) {}

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  logout() {
    this.routes.navigate(['/login']);
  }
}
