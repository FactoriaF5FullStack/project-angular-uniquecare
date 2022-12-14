import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoderService {

  apiURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
      return this.http.get<any>(`${this.apiURL}/api/v1/coders`);
  }
}
