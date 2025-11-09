import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from '../../../../shared/ui/modal/modal';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-patient',
  imports: [Modal, CommonModule, MatButtonModule],
  templateUrl: './detail-patient.html',
  styleUrl: './detail-patient.scss',
})
export class DetailPatient {
  paciente = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<DetailPatient>);

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('Guardando paciente:', this.paciente);
    this.dialogRef.close(this.paciente);
  }
}
