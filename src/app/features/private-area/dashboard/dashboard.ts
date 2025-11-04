import { Component } from '@angular/core';
import { Table } from '../../../shared/ui/table/table';
import { TableConfig } from '../../../shared/models/table.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  currentDate: string = '';
  sesionesHoyConfig!: TableConfig;

  // Estadísticas
  pacientesActivos: number = 75;
  sesionesHoy: number = 12;
  sesionesCompletadas: number = 4;
  sesionesSemana: number = 50;

  ngOnInit() {
    this.setCurrentDate();
    this.initializeTableConfig();
  }

  private setCurrentDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    this.currentDate = today.toLocaleDateString('es-ES', options);
    // Capitalizar primera letra
    this.currentDate =
      'Hoy ' + this.currentDate.charAt(0).toUpperCase() + this.currentDate.slice(1);
  }

  private initializeTableConfig() {
    this.sesionesHoyConfig = {
      columns: [
        {
          key: 'hora',
          label: 'Hora',
          sortable: false,
        },
        {
          key: 'paciente',
          label: 'Paciente',
        },
        {
          key: 'fisioterapeuta',
          label: 'Fisioterapeuta',
        },
        {
          key: 'tipo',
          label: 'Tipo',
        },
        {
          key: 'estado',
          label: 'Estado',
        },
      ],
      data: this.getSesionesHoy(),
      filterPlaceholder: 'Buscar por paciente, fisioterapeuta...',
      pageSizeOptions: [5, 10, 20],
      showFilter: true,
      noDataMessage: 'No hay sesiones programadas para hoy',
    };
  }

  private getSesionesHoy() {
    // Aquí normalmente obtendrías los datos de un servicio
    // Datos de ejemplo:
    return [
      {
        hora: '9:00',
        paciente: 'María Barrios',
        fisioterapeuta: 'Ricardo García',
        tipo: '1ª sesión',
        estado: 'Confirmada',
      },
      {
        hora: '10:00',
        paciente: 'Juan Pérez',
        fisioterapeuta: 'Ana Martínez',
        tipo: '3ª sesión',
        estado: 'Pendiente',
      },
      {
        hora: '11:30',
        paciente: 'Laura González',
        fisioterapeuta: 'Ricardo García',
        tipo: '2ª sesión',
        estado: 'Confirmada',
      },
      {
        hora: '12:00',
        paciente: 'Carlos Ruiz',
        fisioterapeuta: 'Luis Fernández',
        tipo: '5ª sesión',
        estado: 'Confirmada',
      },
      {
        hora: '15:00',
        paciente: 'Ana López',
        fisioterapeuta: 'Ana Martínez',
        tipo: '1ª sesión',
        estado: 'Pendiente',
      },
      {
        hora: '16:00',
        paciente: 'Pedro Sánchez',
        fisioterapeuta: 'Ricardo García',
        tipo: '4ª sesión',
        estado: 'Confirmada',
      },
      {
        hora: '17:00',
        paciente: 'Isabel Moreno',
        fisioterapeuta: 'Luis Fernández',
        tipo: '2ª sesión',
        estado: 'Confirmada',
      },
      {
        hora: '18:00',
        paciente: 'Miguel Torres',
        fisioterapeuta: 'Ana Martínez',
        tipo: '6ª sesión',
        estado: 'Completada',
      },
      {
        hora: '19:00',
        paciente: 'Carmen Díaz',
        fisioterapeuta: 'Ricardo García',
        tipo: '7ª sesión',
        estado: 'Confirmada',
      },
    ];
  }
}
