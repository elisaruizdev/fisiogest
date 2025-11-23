import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environment/environment';
import { Physio } from '../models/physios.model';


@Injectable({
  providedIn: 'root',
})
export class PhysiosService {
  private apiUrl = `${environment.baseUrl}/physios`;

  constructor(private http: HttpClient) {}

  getAllPhysios(): Observable<Physio[]> {
    return this.http.get<Physio[]>(this.apiUrl);
  }

  approvePhysio(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectPhysio(id: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/reject`, {});
  }
}
