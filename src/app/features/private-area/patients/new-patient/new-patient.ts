import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Modal } from '../../../../shared/ui/modal/modal';
import { Form } from '../../../../shared/ui/form/form';
import { FormConfig } from '../../../../shared/models/form.model';

@Component({
  selector: 'app-new-patient',
  imports: [Modal, Form],
  templateUrl: './new-patient.html',
  styleUrl: './new-patient.scss',
})
export class NewPatient implements OnInit {

  patientFormConfig: FormConfig = {
    sections: [
      // SECCIÓN 1: Datos Personales
      {
        title: 'Datos Personales',
        fields: [
          {
            name: 'nombre',
            label: 'Nombre',
            type: 'text',
            placeholder: 'Nombre del paciente',
            required: true,
            validators: [Validators.minLength(2)]
          },
          {
            name: 'apellidos',
            label: 'Apellidos',
            type: 'text',
            placeholder: 'Apellidos completos',
            required: true,
            validators: [Validators.minLength(2)]
          },
          {
            name: 'dni',
            label: 'DNI/NIE',
            type: 'text',
            placeholder: '12345678A',
            required: true,
            validators: [
              Validators.pattern(/^[0-9]{8}[A-Z]$|^[XYZ][0-9]{7}[A-Z]$/)
            ]
          },
          {
            name: 'fechaNacimiento',
            label: 'Fecha de Nacimiento',
            type: 'date',
            placeholder: 'dd/mm/aaaa',
            required: true
          },
          {
            name: 'genero',
            label: 'Género',
            type: 'select',
            placeholder: 'Seleccione...',
            required: false,
            options: [
              { value: 'masculino', label: 'Masculino' },
              { value: 'femenino', label: 'Femenino' },
              { value: 'otro', label: 'Otro' }
            ]
          },
          {
            name: 'seguroMedico',
            label: 'Seguro Médico',
            type: 'text',
            placeholder: 'Compañía de seguro',
            required: false
          }
        ]
      },
      
      // SECCIÓN 2: Datos de Contacto
      {
        title: 'Datos de Contacto',
        fields: [
          {
            name: 'telefono',
            label: 'Teléfono',
            type: 'tel',
            placeholder: '+34 612 345 678',
            required: true,
            validators: [
              Validators.pattern(/^(\+34|0034|34)?[6789]\d{8}$/)
            ]
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'paciente@email.com',
            required: true,
            validators: [Validators.email]
          },
          {
            name: 'direccion',
            label: 'Dirección Completa',
            type: 'text',
            placeholder: 'Calle, número, piso, puerta',
            required: true,
            cssClass: 'form-field--full'
          },
          {
            name: 'ciudad',
            label: 'Ciudad',
            type: 'text',
            placeholder: 'Madrid',
            required: true
          },
          {
            name: 'codigoPostal',
            label: 'Código Postal',
            type: 'text',
            placeholder: '28001',
            required: true,
            validators: [
              Validators.pattern(/^[0-9]{5}$/)
            ]
          },
          {
            name: 'contactoEmergencia',
            label: 'Contacto de Emergencia',
            type: 'text',
            placeholder: 'Nombre y teléfono',
            required: false,
            cssClass: 'form-field--full'
          }
        ]
      },
      
      // SECCIÓN 3: Información Médica Inicial
      {
        title: 'Información Médica Inicial',
        subtitle: '(Opcional)',
        fields: [
          {
            name: 'motivoConsulta',
            label: 'Motivo de Consulta',
            type: 'textarea',
            placeholder: '¿Por qué acude el paciente?',
            rows: 4,
            required: false,
            cssClass: 'form-field--full'
          },
          {
            name: 'antecedentesMedicos',
            label: 'Antecedentes Médicos',
            type: 'textarea',
            placeholder: 'Enfermedades previas, cirugías, alergias, medicación actual...',
            rows: 4,
            required: false,
            cssClass: 'form-field--full'
          }
        ]
      }
    ]
  };

  ngOnInit(): void {
    console.log('Componente NewPatient inicializado');
  }

  onSubmitPatient(patientData: any): void {
    console.log('Datos del nuevo paciente:', patientData);
    
    const formattedData = this.formatPatientData(patientData);
    alert('Paciente creado (revisar consola para ver datos)');
    this.closeModal();
  }

  onCancelForm(): void {
    console.log('Formulario cancelado');
    this.closeModal();
  }

  closeModal(): void {
    console.log('Modal cerrado');
  }

  private formatPatientData(data: any): any {
    return {
      ...data,
      dni: data.dni?.toUpperCase().trim(),
      telefono: data.telefono?.replace(/\s/g, ''),
      email: data.email?.toLowerCase().trim(),
      nombre: this.capitalizeText(data.nombre),
      apellidos: this.capitalizeText(data.apellidos),
      ciudad: data.ciudad ? this.capitalizeText(data.ciudad) : null,
      genero: data.genero || null,
      seguroMedico: data.seguroMedico?.trim() || null,
      contactoEmergencia: data.contactoEmergencia?.trim() || null,
      motivoConsulta: data.motivoConsulta?.trim() || null,
      antecedentesMedicos: data.antecedentesMedicos?.trim() || null
    };
  }


  private capitalizeText(text: string): string {
    if (!text) return '';
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private showSuccessNotification(message: string): void {
    console.log('ÉXITO:', message);
  }

  private showErrorNotification(message: string): void {
    console.error('ERROR:', message);
  }
}