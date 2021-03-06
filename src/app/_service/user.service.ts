import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl = environment.apiLocalUrl;

  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(this.serverUrl + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(this.serverUrl + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(this.serverUrl + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.serverUrl + 'admin', { responseType: 'text' });
  }
}