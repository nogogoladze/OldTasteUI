import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = environment.apiLoinUrl;

  constructor(private http: HttpClient) { }
  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(this.serverUrl + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this.http.post(this.serverUrl + 'registration', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}