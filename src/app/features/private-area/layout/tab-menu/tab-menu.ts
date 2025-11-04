import { Component } from '@angular/core';
import { TabItem } from '../models/layout.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-menu.html',
  styleUrl: './tab-menu.scss',
})
export class TabMenu {
  ngOnInit(): void {
    console.log(this.tabs[0].icon);
  }

  tabs: TabItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'icons/home.svg' },
    { label: 'Pacientes', route: '/patients', icon: 'icons/patient.svg' },
    { label: 'Sesiones', route: '/sessions', icon: 'icons/calendar.svg' },
    { label: 'Fisios', route: '/physios', icon: 'icons/massage.svg' },
  ];
}
