import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from '../../../../shared/ui/modal/modal';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardInfo } from '../../../../shared/ui/card-info/card-info';
import { MenuDetailPatientComponent } from './menu-detail-patient/menu-detail-patient';
import { ClinicalHistory } from './clinical-history/clinical-history';
import { Treatments } from './treatments/treatments';
import { SessionsHistory } from './sessions-history/sessions-history';

@Component({
  selector: 'app-detail-patient',
  imports: [
    Modal,
    CommonModule,
    MatButtonModule,
    CardInfo,
    MenuDetailPatientComponent,
    ClinicalHistory,
    Treatments,
    SessionsHistory,
  ],
  templateUrl: './detail-patient.html',
  styleUrl: './detail-patient.scss',
})
export class DetailPatient {
  paciente = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DetailPatient>);
  activeTab: 'clinical' | 'treatments' | 'sessions' = 'clinical';

  pacientesData = [
    { label: 'Nombre', value: this.paciente.nombre },
    { label: 'Edad', value: this.paciente.edad },
    { label: 'Género', value: this.paciente.genero },
    { label: 'Teléfono', value: this.paciente.telefono },
    { label: 'Email', value: this.paciente.email },
  ];

  medicalData = [];

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('Guardando paciente:', this.paciente);
    this.dialogRef.close(this.paciente);
  }

  onTabChange(tab: 'clinical' | 'treatments' | 'sessions'): void {
    this.activeTab = tab;
  }
}
