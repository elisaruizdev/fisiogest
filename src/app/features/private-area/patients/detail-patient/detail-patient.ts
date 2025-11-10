import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from '../../../../shared/ui/modal/modal';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardInfo } from '../../../../shared/ui/card-info/card-info';

@Component({
  selector: 'app-detail-patient',
  imports: [Modal, CommonModule, MatButtonModule, CardInfo],
  templateUrl: './detail-patient.html',
  styleUrl: './detail-patient.scss',
})
export class DetailPatient {
  paciente = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DetailPatient>);

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
}
