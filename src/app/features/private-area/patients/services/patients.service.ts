import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePatient, Patient } from '../models/patients.model';
import { environment } from '../../../../../environment/environment';


@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private apiUrl = `${environment.baseUrl}/patients`;

  constructor(private http: HttpClient) {}

  createPatient(patient: CreatePatient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
}
