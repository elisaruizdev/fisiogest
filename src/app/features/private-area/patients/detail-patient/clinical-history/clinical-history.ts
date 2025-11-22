import { Component } from '@angular/core';
import { ButtonUI } from '../../../../../shared/ui/button/button';

@Component({
  selector: 'app-clinical-history',
  imports: [ButtonUI],
  templateUrl: './clinical-history.html',
  styleUrl: './clinical-history.scss',
})
export class ClinicalHistory {


  openNewDiagnosis() {
    console.log('Abrir nuevo diagnóstico');
  }
}
