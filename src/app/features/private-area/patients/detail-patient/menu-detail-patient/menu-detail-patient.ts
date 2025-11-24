import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItem } from '../../../layout/models/layout.model';


@Component({
  selector: 'menu-detail-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-detail-patient.html',
  styleUrls: ['./menu-detail-patient.scss']
})
export class MenuDetailPatientComponent {
  @Output() tabChange = new EventEmitter<'clinical' | 'treatments' | 'sessions'>();

  activeTab: 'clinical' | 'treatments' | 'sessions' = 'clinical';

  tabs: TabItem[] = [
    { 
      label: 'Historial Clínico', 
      id: 'clinical', 
      icon: 'assets/icons/stethoscope.svg' 
    },
    { 
      label: 'Tratamientos', 
      id: 'treatments', 
      icon: 'assets/icons/medication.svg' 
    },
    { 
      label: 'Historial de Sesiones', 
      id: 'sessions', 
      icon: 'assets/icons/calendar.svg' 
    }
  ];

  selectTab(tabId: 'clinical' | 'treatments' | 'sessions'): void {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }
}