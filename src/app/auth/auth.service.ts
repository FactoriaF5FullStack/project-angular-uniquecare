import { Injectable } from '@angular/core';
import { User } from '../models/user';
import * as moment from "moment";
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string): Observable<User> {
      return this.http.post<User>(`${this.apiURL}/api/v1/auth/signin`, {username, password})
            .pipe(
              tap(res => this.setSession(res))
            );
  }

  private setSession(authResult:User) {
    const principal = {
      id: authResult.id,
      username: authResult.username,
      email: authResult.email,
      role: authResult.role
    };

    const expiresAt = moment(authResult.expiresAt);

    const token = {
      id: authResult.token,
      type: authResult.type,
      expiresAt: expiresAt.valueOf()
    }
    localStorage.setItem('principal', JSON.stringify(principal));
    localStorage.setItem("token", JSON.stringify(token) );
  }

  logout() {
      localStorage.removeItem("principal");
      localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const token = JSON.parse(localStorage.getItem("token")!);
      if(token == null) {
        return moment().add(-1, 'days');
      }
      const expiresAt = JSON.parse(token.expiresAt);
      return moment(expiresAt);
  }
}
