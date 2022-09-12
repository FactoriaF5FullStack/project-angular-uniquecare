import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../models/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  apiURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.apiURL}/api/v1/facility`);
  }

  getById(id: string | null): Observable<Facility> {
    return this.http.get<Facility>(`${this.apiURL}/api/v1/facility/${id}`);
  }

  create(formData: any): Observable<string> {
    const facility = {
      name: formData.title,
      description: formData.description,
      basePrice: formData.basePrice
    }
    return this.http.post<string>(`${this.apiURL}/api/v1/facility`, facility);
  }
}
