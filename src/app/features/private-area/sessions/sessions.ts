import { Component, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TableConfig } from '../../../shared/models/table.model';
import { Table } from '../../../shared/ui/table/table';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentsService } from './services/appointments.service';
import { Appointment } from './models/appointment.model';
import { ButtonUI } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-sessions',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, Table, ButtonUI],
  templateUrl: './sessions.html',
  styleUrl: './sessions.scss',
})
export class Sessions {
  appointments = signal<Appointment[]>([]);

  listadoAppointmentsConfig = computed<TableConfig>(() => ({
    columns: [
      {
        key: 'appointmentDate',
        label: 'Fecha y Hora',
      },
      {
        key: 'patientName',
        label: 'Paciente',
      },
      {
        key: 'physioName',
        label: 'Fisioterapeuta',
      },
      {
        key: 'sessionType',
        label: 'Tipo',
      },
      {
        key: 'status',
        label: 'Estado',
      },
    ],
    data: this.mapAppointmentsToTableData(this.appointments()),
    filterPlaceholder: 'Buscar cita...',
    pageSizeOptions: [5, 10, 20],
    showFilter: true,
    noDataMessage: 'Sin citas programadas',
    clickableRows: true,
    clickableParams: 'view-appointment',
  }));

  constructor(private dialog: MatDialog, private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentsService.getAllAppointments().subscribe({
      next: (appointments) => {
        this.appointments.set(appointments);
      },
      error: (error) => {
        console.error('Error al cargar citas:', error);
      },
    });
  }

  private mapAppointmentsToTableData(appointments: Appointment[]) {
    return appointments.map((appointment) => ({
      id: appointment.id,
      appointmentDate: this.formatDateTime(appointment.appointment_date),
      patientName: this.getPatientName(appointment),
      physioName: this.getPhysioName(appointment),
      sessionType: `${appointment.session_number}ª sesión`,
      status: this.translateStatus(appointment.status),
    }));
  }

  private formatDateTime(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  private getPatientName(appointment: Appointment): string {
    if (!appointment.patient) return 'Paciente no disponible';
    const parts = [appointment.patient.name, appointment.patient.surname];
    if (appointment.patient.second_surname) {
      parts.push(appointment.patient.second_surname);
    }
    return parts.join(' ');
  }

  private getPhysioName(appointment: Appointment): string {
    if (!appointment.physio) return 'Fisioterapeuta no disponible';
    const parts = [appointment.physio.name, appointment.physio.surname];
    if (appointment.physio.second_surname) {
      parts.push(appointment.physio.second_surname);
    }
    return parts.join(' ');
  }

  private translateStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      scheduled: 'Programada',
      confirmed: 'Confirmada',
      completed: 'Completada',
      cancelled: 'Cancelada',
    };
    return statusMap[status] || status;
  }

  onAppointmentClick(event: any): void {
    const { row } = event;
    this.appointmentsService.getAppointmentById(row.id).subscribe({
      next: (appointment) => {
        this.abrirDetalleAppointment(appointment);
      },
      error: (error) => {
        console.error('Error al cargar cita:', error);
        alert('Error al cargar la información de la cita');
      },
    });
  }

  private abrirDetalleAppointment(appointment: Appointment): void {
    console.log('Abrir detalle de cita:', appointment);
    // Aquí abriremos el modal de detalle
  }

  abrirNuevaCita(): void {
    console.log('Abrir modal nueva cita');
    // Aquí abriremos el modal de nueva cita
  }
}
