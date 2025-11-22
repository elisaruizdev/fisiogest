import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-card',
  imports: [CommonModule],
  templateUrl: './delete-card.html',
  styleUrl: './delete-card.scss',
})
export class DeleteCard {
  showDeleteModal = false;

  openDeleteModal(): void {
    this.showDeleteModal = true;
  }
  @Input() title: string = '¿Estás seguro?';

  @Input() messagePrefix: string = 'Esta acción eliminará';
  @Input() highlightText: string = 'permanentemente';
  @Input() messageSuffix: string = 'al paciente y toda su información:';

  @Input() items: string[] = [
    'Todos los datos personales',
    'Historial clínico completo',
    'Todos los tratamientos',
    'Todas las sesiones registradas',
  ];


  @Input() warningMessage: string = 'Esta acción NO se puede deshacer.';


  @Input() cancelText: string = 'Cancelar';
  @Input() confirmText: string = 'Sí, Eliminar Definitivamente';


  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onCancel(): void {
    this.cancel.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    this.showDeleteModal = false;
  }
}
