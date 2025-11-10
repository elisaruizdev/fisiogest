import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonUI } from '../../../shared/ui/button/button';
import { TableConfig } from '../../../shared/models/table.model';
import { Table } from '../../../shared/ui/table/table'; 
import { DetailPatient } from './detail-patient/detail-patient';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patients',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ButtonUI, Table],
  templateUrl: './patients.html',
  styleUrl: './patients.scss',
})
export class Patients {
  listadoPacientesConfig!: TableConfig;

  constructor(private dialog: MatDialog){}

  ngOnInit() {
    this.initializeTableConfig();
  }

  private initializeTableConfig() {
    this.listadoPacientesConfig = {
      columns: [
        {
          key: 'nombre',
          label: 'Nombre',
        },
        {
          key: 'edad',
          label: 'Edad',
        },
        {
          key: 'proximaCita',
          label: 'Próxima cita',
        },
        {
          key: 'ultimaCita',
          label: 'Última cita',
        },
        {
          key: 'diagnostico',
          label: 'Diagnóstico',
        },
        {
          key: 'tratamiento',
          label: 'Tratamiento',
        },
        {
          key: 'estado',
          label: 'Estado',
        },
      ],
      data: this.getListadoPacientes(),
      filterPlaceholder: 'Buscar paciente...',
      pageSizeOptions: [5, 10, 20],
      showFilter: true,
      noDataMessage: 'Sin resultados',
      clickableRows: true, 
      clickableParams: 'view-patient'
    };
  }

  private getListadoPacientes() {
    return [
      {
        id: 1,
        nombre: 'Juan Pérez',
        edad: 30,
        proximaCita: '12/07/2024',
        ultimaCita: '05/07/2024',
        diagnostico: 'Esguince de tobillo',
        tratamiento: 'Fisioterapia y reposo',
        estado: 'Activo',
      },
      {
        id: 2,
        nombre: 'María Gómez',
        edad: 25,
        proximaCita: '15/07/2024',
        ultimaCita: '08/07/2024',
        diagnostico: 'Tendinitis rotuliana',
        tratamiento: 'Ejercicios de fortalecimiento',
        estado: 'Activo',
      },
      {
        id: 3,
        nombre: 'Luis Rodríguez',
        edad: 40,
        proximaCita: '20/07/2024',
        ultimaCita: '10/07/2024',
        diagnostico: 'Hernia discal',
        tratamiento: 'Terapia manual y ejercicios posturales',
        estado: 'Inactivo',
      },
    ];
  }

  onPacienteClick(event: any): void {
    const { row, param } = event;
    console.log('Paciente seleccionado:', row);
    console.log('Parámetro:', param); 

    this.abrirDetallePaciente(row);
  }

  private abrirDetallePaciente(paciente: any): void {
    console.log('Abrir detalle del paciente:', paciente.nombre);
    console.log('ID del paciente:', paciente.id);

    this.dialog.open(DetailPatient, {
     data: paciente,
      width: '800px'
    });
  }
}
